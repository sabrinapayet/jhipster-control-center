<template>
  <div id="app">
    <ribbon></ribbon>
    <div id="app-header">
      <jhi-navbar></jhi-navbar>
    </div>
      <div class="container-fluid">
         <jhi-sidebar-menu></jhi-sidebar-menu>
        <div class="card jh-card">
          <router-view></router-view>
        </div>
        <jhi-footer></jhi-footer>
        <b-modal id="login-page" hide-footer lazy>
          <span slot="modal-title" id="login-title">Sign in</span>
          <login-form></login-form>
        </b-modal>
      </div>
    </div>
</template>

<script lang="ts" src="./app.component.ts"></script>
