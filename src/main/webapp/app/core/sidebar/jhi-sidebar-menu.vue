<template>
    <div>
    <b-sidebar visible id="sidebar-variant" title="Sidebar" bg-variant="dark" text-variant="light" shadow>
       <b-nav-item
        v-if="hasAnyAuthority('ROLE_ADMIN')">
            <font-awesome-icon icon="chart-line" />
            <span>DashBoard</span>
      </b-nav-item>
      <b-nav-item  to="/admin/jhi-metrics">
          <font-awesome-icon icon="tachometer-alt" />
          <span>Metrics</span>
      </b-nav-item>
      <b-nav-item to="/admin/jhi-health">
          <font-awesome-icon icon="heart" />
          <span>Health</span>
      </b-nav-item>
      <b-nav-item  to="/admin/jhi-configuration">
          <font-awesome-icon icon="list" />
          <span>Configuration</span>
      </b-nav-item>
      <b-nav-item  to="/admin/logs">
          <font-awesome-icon icon="tasks" />
          <span>Logs</span>
      </b-nav-item>
      <b-nav-item v-if="swaggerEnabled"  to="/admin/docs">
          <font-awesome-icon icon="book" />
          <span>API</span>
      </b-nav-item>
      <footer class="footer">
      <div class="container">
        <b-button v-b-toggle.sidebar-variant>Toggle Sidebar</b-button>
      </div>
    </footer>
    </b-sidebar>
    </div>
</template>

<script lang="ts" src="./jhi-sidebar-menu.component.ts"></script>
