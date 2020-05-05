import { Component, Inject, Vue } from 'vue-property-decorator';
//import AccountService from '@/account/account.service';
import { SidebarMenu } from 'vue-sidebar-menu';

/*@Component
export default class VueSidebarMenu extends Vue {
  @Inject('accountService')
  private accountService: () => AccountService;

  created() {}

  public hasAnyAuthority(authorities: any): boolean {
    return this.accountService().hasAnyAuthority(authorities);
  }
  public subIsActive(input) {
    const paths = Array.isArray(input) ? input : [input];
    return paths.some(path => {
      return this.$route.path.indexOf(path) === 0; // current path starts with this path string
    });
  }

  public logout(): void {
    localStorage.removeItem('jhi-authenticationToken');
    sessionStorage.removeItem('jhi-authenticationToken');
    this.$store.commit('logout');
    this.$router.push('/');
  }

  public get authenticated(): boolean {
    return this.$store.getters.authenticated;
  }

  public get swaggerEnabled(): boolean {
    return this.$store.getters.activeProfiles.indexOf('swagger') > -1;
  }

  public get inProduction(): boolean {
    return this.$store.getters.activeProfiles.indexOf('prod') > -1;
  }
}*/
@Component({
  components: {
    'sidebar-menu': SidebarMenu
  }
})
export default class VueSidebarMenu extends Vue {
  public menu = [
    {
      header: true,
      title: 'Main Navigation',
      hiddenOnCollapse: true
    },
    {
      href: '/',
      title: 'Dashboard',
      icon: 'fa fa-home'
    },
    {
      href: '/charts',
      title: 'Charts',
      icon: 'fa fa-home',
      child: [
        {
          href: '/charts/sublink',
          title: 'Sub Link'
        }
      ]
    }
  ];

  public isCollapsed = true;
  public mobileItem = null;
  public mobileItemPos = 0;
  public mobileItemHeight = 0;
  public mobileItemTimeout = null;
  public activeShow = null;
  public parentHeight = '100vh';
  public parentWidth = '100vw';
  public parentOffsetTop = '0px';
  public parentOffsetLeft = '0px';
}
