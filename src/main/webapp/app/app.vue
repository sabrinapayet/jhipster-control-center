<template>
  <div class="app">
    <ribbon></ribbon>
    <div class="app-header">
      <!-- Navbar -->
      <jhi-navbar></jhi-navbar>
    </div>

    <b-container fluid>
      <b-row>
          <!-- Sidebar -->
          <jhi-sidebar-menu></jhi-sidebar-menu>
                <!-- Content here -->
          <div class="card jh-card">
            <router-view></router-view>
          </div>
          <b-modal id="login-page" hide-footer lazy>
            <span slot="modal-title" id="login-title">Sign in</span>
            <login-form></login-form>
          </b-modal>
      </b-row>


      <!-- Footer -->
      <jhi-footer></jhi-footer>
      <!-- We'll fill this with dummy content -->
    </b-container>
  </div>
</template>

<script lang="ts" src="./app.component.ts"></script>
