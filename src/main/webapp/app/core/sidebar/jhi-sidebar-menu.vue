<template>
  <div>
    <b-button v-b-toggle.sidebar-footer>
      <font-awesome-icon icon="bars" />
    </b-button>
    <b-sidebar bg-variant="secondary" id="sidebar-footer" no-close-on-route-change visible>
      <template v-slot:footer="{ hide }">
        <div class="d-flex bg-light text-light align-items-center px-3 py-2">
          <b-button btn btn-secondary size="sm" @click="hide">Close</b-button>
        </div>
      </template>
      <div class="px-3 py-2">
        <b-nav vertical text-variant="light" aria-label="Sidebar" no-header shadow>
          <b-nav-item disabled>
            <font-awesome-icon icon="chart-line" />
            <span>DashBoard</span>
          </b-nav-item>
          <b-nav-item to="/admin/jhi-metrics">
            <font-awesome-icon icon="tachometer-alt" />
            <span>Metrics</span>
          </b-nav-item>
          <b-nav-item to="/admin/jhi-health">
            <font-awesome-icon icon="heart" />
            <span>Health</span>
          </b-nav-item>
          <b-nav-item to="/admin/jhi-configuration">
            <font-awesome-icon icon="list" />
            <span>Configuration</span>
          </b-nav-item>
          <b-nav-item to="/admin/logs">
            <font-awesome-icon icon="tasks" />
            <span>Logs</span>
          </b-nav-item>
          <b-nav-item v-if="swaggerEnabled" to="/admin/docs">
            <font-awesome-icon icon="book" />
            <span>API</span>
          </b-nav-item>
        </b-nav>
      </div>
    </b-sidebar>
  </div>
</template>

<script lang="ts" src="./jhi-sidebar-menu.component.ts"></script>
