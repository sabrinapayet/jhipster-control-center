<template>
  <div id="app">
    <ribbon></ribbon>
    <div class="header">
      <!-- Navbar -->
      <jhi-navbar></jhi-navbar>
    </div>
    <div class="contenair-fluid">
        <!-- Sidebar -->
        <jhi-sidebar-menu></jhi-sidebar-menu>
        <!-- Page Content -->
        <div class="card jh-card">
          <router-view></router-view>
        </div>
        <b-modal id="login-page" hide-footer lazy>
          <span slot="modal-title" id="login-title">Sign in</span>
          <login-form></login-form>
        </b-modal>
      </div>

    <!-- Footer -->
    <jhi-footer></jhi-footer>
  </div>
  <!-- We'll fill this with dummy content -->
</template>

<script lang="ts" src="./app.component.ts"></script>
