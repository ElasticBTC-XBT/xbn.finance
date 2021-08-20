import { throttle } from 'lodash';

export const ScrollReveal = {
  data() {
    var windowHeight = window.innerHeight; 
    
    return {
      viewportHeight: windowHeight,
      revealEl: null
    };
  },
  methods: {
    getElements() {
      this.revealEl = document.querySelectorAll('[class*=reveal-]');
    },
    checkComplete() {
      if(document.querySelectorAll('div.scroll-content').length > 0 ){
        this.viewportHeight = document.querySelectorAll('div.scroll-content')[0].parentNode.offsetHeight;
      }
      return (
        this.revealEl.length <=
        document.querySelectorAll('[class*=reveal-].is-revealed').length
      );
    },
    elementIsVisible(el, offset) {
      return (
        el.getBoundingClientRect().top <= this.viewportHeight - offset
      );
    },
    revealElements() {
      if (this.checkComplete()) return;
      for (let i = 0; i < this.revealEl.length; i++) {
        let el = this.revealEl[i];
        let revealDelay = el.getAttribute('data-reveal-delay');
        let revealOffset = el.getAttribute('data-reveal-offset')
          ? el.getAttribute('data-reveal-offset')
          : '200';
        let listenedEl = el.getAttribute('data-reveal-container')
          ? el.closest(el.getAttribute('data-reveal-container'))
          : el;
        if (
          this.elementIsVisible(listenedEl, revealOffset) &&
          !el.classList.contains('is-revealed')
        ) {
          if (revealDelay && revealDelay !== 0) {
            setTimeout(function () {
              el.classList.add('is-revealed');
            }, revealDelay);
          } else {
            el.classList.add('is-revealed');
          }
        }
      }
    },
    init() {
      setTimeout(() => {
        this.getElements();
        if (!this.checkComplete()) {
          
          if(document.querySelectorAll('div.scroll-content').length > 0 ){
            document.querySelectorAll('div.scroll-content')[0].parentNode.addEventListener('scroll', this.handleScroll);
            document.querySelectorAll('div.scroll-content')[0].parentNode.addEventListener('resize', this.handleResize);
          }

          window.addEventListener('scroll', this.handleScroll);
          window.addEventListener('resize', this.handleResize);
        }
        this.revealElements();
      }, 100);
    },
    handleListeners() {
      if (!this.checkComplete()) return;
     
      if(document.querySelectorAll('div.scroll-content').length > 0 ){
        document.querySelectorAll('div.scroll-content')[0].parentNode.removeEventListener('scroll', this.handleScroll);
        document.querySelectorAll('div.scroll-content')[0].parentNode.removeEventListener('resize', this.handleResize);
      }
      window.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener('resize', this.handleResize);
    },
    handleScroll() {
      this.handleListeners();
      this.revealElements();
    },
    handleResize() {
      this.viewportHeight = window.innerHeight;
      if(document.querySelectorAll('div.scroll-content').length > 0 ){
        this.viewportHeight = document.querySelectorAll('div.scroll-content')[0].parentNode.offsetHeight;
      }
      this.handleListeners();
      this.revealElements();
    }
  },
  created() {
    this.handleScroll = throttle(this.handleScroll, 30);
    this.handleResize = throttle(this.handleResize, 30);
  },
  mounted() {
    //this.$nextTick(() => {
    this.init();
    //});
    // Re-init on route change
    if (this.$router) {
      this.$watch('$route', () => {
        //this.$nextTick(() => {
        this.init();
        //});
      });
    }
    // Re-init on hot reload (for development purposes only)
    // https://webpack.js.org/api/hot-module-replacement/#addstatushandler
    if (module.hot) {
      module.hot.accept();
      module.hot.addStatusHandler(status => {
        if (status === 'idle') this.init();
      })
    }
  }
};
