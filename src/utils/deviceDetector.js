/**
 * 设备检测工具 (DeviceDetector)
 *
 * 这个工具类用于检测用户设备类型，包括移动设备、平板设备和桌面设备的识别。
 * 平板设备在本工具中被归类为桌面设备。
 *
 * 使用方法:
 *
 * 1. 导入方式:
 *    import { isMobile, isDesktop, isTablet, getDeviceType, getDeviceInfo, getMobileBrand } from './utils/deviceDetector'
 *    // 或者导入整个类
 *    import { DeviceDetector } from './utils/deviceDetector'
 *    // 或者使用默认导出的实例
 *    import deviceDetector from './utils/deviceDetector'
 *
 * 2. 基础用法:
 *    // 检测设备类型
 *    if (isMobile()) {
 *      console.log('当前是移动设备')
 *    }
 *
 *    if (isDesktop()) {
 *      console.log('当前是桌面设备')
 *    }
 *
 *    if (isTablet()) {
 *      console.log('当前是平板设备')
 *    }
 *
 * 3. 获取设备类型字符串:
 *    const deviceType = getDeviceType() // 返回 'mobile' 或 'desktop'
 *
 * 4. 获取详细设备信息:
 *    const deviceInfo = getDeviceInfo()
 *    console.log(deviceInfo)
 *    // 输出: {
 *    //   type: 'mobile',
 *    //   isMobile: true,
 *    //   isTablet: false,
 *    //   isDesktop: false,
 *    //   screenWidth: 375,
 *    //   screenHeight: 812,
 *    //   userAgent: '...',
 *    //   platform: '...',
 *    //   maxTouchPoints: 5,
 *    //   hasTouch: true
 *    // }
 *
 * 5. 获取移动设备品牌:
 *    const brand = getMobileBrand() // 返回 'iPhone', 'Android', 'iPad' 等
 *
 * 6. 在Vue组件中使用:
 *    <template>
 *      <div :class="{ 'mobile-layout': isMobile(), 'desktop-layout': isDesktop() }">
 *        <!-- 内容 -->
 *      </div>
 *    </template>
 *
 * 7. 响应式设计:
 *    // 结合CSS媒体查询使用
 *    if (isMobile()) {
 *      // 移动端特定逻辑
 *      this.showMobileMenu = true
 *    } else {
 *      // 桌面端特定逻辑
 *      this.showSidebar = true
 *    }
 *
 * 注意事项:
 * - 平板设备被归类为桌面设备
 * - 检测基于User-Agent、屏幕尺寸和触摸支持等多重因素
 * - 移动设备判断标准：屏幕宽度 ≤ 768px 且支持触摸，但排除平板
 */

class DeviceDetector {
  /**
   * 初始化设备检测器，收集设备基础信息
   * 构造函数，用于初始化设备信息对象
   * 该构造函数会收集并存储当前设备和浏览器的相关信息
  */
  constructor() {
    this.userAgent = navigator.userAgent.toLowerCase();
    // 使用现代API替代已弃用的platform属性
    this.platform = this.getPlatformInfo();
    this.maxTouchPoints = navigator.maxTouchPoints || 0;
    this.screenWidth = window.screen.width;
    this.screenHeight = window.screen.height;
  }

  /**
   * 获取平台信息 - 使用现代API替代已弃用的navigator.platform
   * @returns {string} 平台信息字符串
   */
  getPlatformInfo() {
    // 优先使用现代的userAgentData API
    if (navigator.userAgentData && navigator.userAgentData.platform) {
      return navigator.userAgentData.platform.toLowerCase();
    }

    // 通过User-Agent字符串推断平台信息
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes('mac')) return 'macintel';
    if (ua.includes('win')) return 'win32';
    if (ua.includes('linux')) return 'linux';
    if (ua.includes('android')) return 'android';
    if (ua.includes('iphone') || ua.includes('ipad')) return 'ios';

    // 降级方案：仍然使用platform但添加错误处理
    try {
      return navigator.platform ? navigator.platform.toLowerCase() : 'unknown';
    } catch (e) {
      return 'unknown';
    }
  }

  /**
   * 检测是否为移动设备
   * 通过User-Agent、屏幕尺寸和触摸支持综合判断，排除平板设备
   * @returns {boolean} true表示移动设备，false表示桌面设备
   */
  isMobile() {
    // User-Agent检测
    const mobileRegex = /android|webos|iphone|ipod|blackberry|iemobile|opera mini/i;
    const isMobileUA = mobileRegex.test(this.userAgent);

    // 屏幕尺寸检测（移动设备通常宽度≤768px）
    const isMobileScreen = this.screenWidth <= 768;

    // 触摸支持检测
    const hasTouchSupport = this.maxTouchPoints > 0 || 'ontouchstart' in window;

    // 排除平板设备
    const isTablet = this.isTablet();

    return (isMobileUA || (isMobileScreen && hasTouchSupport)) && !isTablet;
  }

  /**
   * 检测是否为平板设备
   * 通过User-Agent和屏幕尺寸综合判断
   * @returns {boolean} true表示平板设备
   */
  isTablet() {
    // iPad检测（包括新版iPad的MacIntel平台标识）
    const isIPad = /ipad/i.test(this.userAgent) ||
      (this.platform === 'macintel' && this.maxTouchPoints > 1);

    // Android平板检测
    const isAndroidTablet = /android/i.test(this.userAgent) &&
      !/mobile/i.test(this.userAgent) &&
      this.screenWidth >= 768;

    // 其他平板设备检测
    const isOtherTablet = /tablet|kindle|silk|playbook/i.test(this.userAgent);

    return isIPad || isAndroidTablet || isOtherTablet;
  }

  /**
   * 检测是否为桌面设备
   * @returns {boolean} true表示桌面设备（包括平板）
   */
  isDesktop() {
    return !this.isMobile();
  }

  /**
   * 获取设备类型字符串
   * @returns {string} 'mobile' | 'desktop'
   */
  getDeviceType() {
    return this.isMobile() ? 'mobile' : 'desktop';
  }

  /**
   * 获取设备信息的方法
   * 返回一个包含设备各种属性的对象
   * @returns {Object} 包含设备信息的对象
   */
  getDeviceInfo() {
    return {
      type: this.getDeviceType(),      // 设备类型（手机、平板或桌面）
      isMobile: this.isMobile(),       // 是否为移动设备
      isTablet: this.isTablet(),       // 是否为平板设备
      isDesktop: this.isDesktop(),     // 是否为桌面设备
      screenWidth: this.screenWidth,   // 屏幕宽度
      screenHeight: this.screenHeight, // 屏幕高度
      userAgent: navigator.userAgent,   // 浏览器用户代理字符串
      platform: this.platform,    // 操作系统平台
      maxTouchPoints: this.maxTouchPoints, // 最大触摸点数
      hasTouch: 'ontouchstart' in window  // 是否支持触摸事件
    };
  }

  /**
   * 根据用户代理字符串获取移动设备品牌
   * @returns {string} 返回设备品牌名称，如果无法识别则返回'Unknown'
   */
  getMobileBrand() {
    if (/iphone|ipod/i.test(this.userAgent)) return 'iPhone';
    if (/ipad/i.test(this.userAgent)) return 'iPad';
    if (/android/i.test(this.userAgent)) return 'Android';
    if (/blackberry/i.test(this.userAgent)) return 'BlackBerry';
    if (/windows phone/i.test(this.userAgent)) return 'Windows Phone';
    return 'Unknown';
  }
}

// 创建单例实例
const deviceDetector = new DeviceDetector();

// 导出常用检测方法
export const isMobile = () => deviceDetector.isMobile();
export const isDesktop = () => deviceDetector.isDesktop();
export const isTablet = () => deviceDetector.isTablet();
export const getDeviceType = () => deviceDetector.getDeviceType();
export const getDeviceInfo = () => deviceDetector.getDeviceInfo();
export const getMobileBrand = () => deviceDetector.getMobileBrand();

// 导出类本身，用于创建新实例
export { DeviceDetector };

// 默认导出单例实例
export default deviceDetector;

