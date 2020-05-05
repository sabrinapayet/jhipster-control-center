<template>
  <b-nav id="sidebar" class="bg-secondary">
    <b-nav-item-dropdown
      id="my-nav-dropdown"
      toggle-class="nav-link-custom"
      v-if="hasAnyAuthority('ROLE_ADMIN')"
     > 
      <span slot="button-content">
          <font-awesome-icon icon="user-plus" />
          <span>Dashboard</span>
      </span>
      <b-dropdown-item to="/admin/jhi-metrics">
        <font-awesome-icon icon="tachometer-alt" />
        <span>Metrics</span>
      </b-dropdown-item>
      <b-dropdown-item to="/admin/jhi-health">
        <font-awesome-icon icon="heart" />
        <span>Health</span>
      </b-dropdown-item>
      <b-dropdown-item  to="/admin/jhi-configuration">
          <font-awesome-icon icon="list" />
          <span>Configuration</span>
      </b-dropdown-item>
      <b-dropdown-item  to="/admin/logs">
          <font-awesome-icon icon="tasks" />
          <span>Logs</span>
      </b-dropdown-item>
      <b-dropdown-item v-if="swaggerEnabled"  to="/admin/docs">
          <font-awesome-icon icon="book" />
          <span>API</span>
      </b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
    </b-nav-item-dropdown>
     <span class="hipster img-fluid rounded"></span>
  </b-nav>
   
</template>

<script lang="ts" src="./jhi-sidebar-menu.component.ts"></script>
