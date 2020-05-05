import { Component, Vue } from 'vue-property-decorator';
import { SidebarMenu } from 'vue-sidebar-menu';

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
      icon: 'fa fa-user'
    },
    {
      href: '/charts',
      title: 'Charts',
      icon: 'fa fa-chart-area',
      child: [
        {
          href: '/charts/sublink',
          title: 'Sub Link'
        }
      ]
    }
  ];
}
