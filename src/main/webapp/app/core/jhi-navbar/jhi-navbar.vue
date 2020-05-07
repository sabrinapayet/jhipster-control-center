<template>
  <b-navbar toggleable="md" type="dark" class="bg-primary">
    <div class="jh-logo-container row">
      <b-navbar-brand class="col-10 logo float-left" b-link to="/">
        <span class="logo-img"></span>
        <span class="navbar-title">Jhipster</span> <span class="navbar-version">{{ version }}</span>
      </b-navbar-brand>
      <b-navbar-toggle
        right
        class="jh-navbar-toggler d-lg-none float-right col"
        href="javascript:void(0);"
        data-toggle="collapse"
        target="header-tabs"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <font-awesome-icon icon="bars" />
      </b-navbar-toggle>
    </div>
    <b-collapse is-nav id="header-tabs">
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/" exact>
          <span>
            <font-awesome-icon icon="home" />
            <span>Home</span>
          </span>
        </b-nav-item>
        <b-nav-item-dropdown
          id="applications-menu"
          v-if="hasAnyAuthority('ROLE_ADMIN')"
          :class="{ 'router-link-active': subIsActive('/applications') }"
          active-class="active"
          class="pointer"
        >
          <span slot="button-content" class="navbar-dropdown-menu">
            <font-awesome-icon icon="sitemap" />
            <span>Applications</span>
          </span>
          <b-dropdown-item to="/applications/instances">
            <font-awesome-icon icon="cube" />
            <span>Instances</span>
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown id="entity-menu" v-if="authenticated" active-class="active" class="pointer">
          <span slot="button-content" class="navbar-dropdown-menu">
            <font-awesome-icon icon="th-list" />
            <span>Entities</span>
          </span>
          <!-- jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here -->
        </b-nav-item-dropdown>
        <b-nav-item-dropdown
          right
          href="javascript:void(0);"
          id="account-menu"
          :class="{ 'router-link-active': subIsActive('/account') }"
          active-class="active"
          class="pointer"
        >
          <span slot="button-content" class="navbar-dropdown-menu">
            <font-awesome-icon icon="user" />
            <span>
              Account
            </span>
          </span>
          <b-dropdown-item v-if="authenticated" v-on:click="logout()" id="logout">
            <font-awesome-icon icon="sign-out-alt" />
            <span>Sign out</span>
          </b-dropdown-item>
          <b-dropdown-item v-if="!authenticated" v-on:click="openLogin()" id="login">
            <font-awesome-icon icon="sign-in-alt" />
            <span>Sign in</span>
          </b-dropdown-item>
        </b-nav-item-dropdown>
         <b-nav-item id="sidebar-icon" to="/" exact v-if="hasAnyAuthority('ROLE_ADMIN')">
          <span v-b-toggle.sidebar-footer>
            <font-awesome-icon class="fa-lg" icon="align-left" />
          </span>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts" src="./jhi-navbar.component.ts"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* ==========================================================================
    Navbar
    ========================================================================== */
.navbar-version {
  font-size: 10px;
}

/* jhcc-custom */
.navbar {
  padding: 0.5rem !important;
  z-index: 1000;
}

button:focus {
 outline-color: white;
}

@media screen and (min-width: 768px) {
  .jh-navbar-toggler {
    display: none;
  }
}

@media screen and (min-width: 768px) and (max-width: 1150px) {
  span span {
    display: none;
  }
}

@media screen and (max-width: 767px) {
  .jh-logo-container {
    width: 100%;
  }
}

.navbar-title {
  display: inline-block;
  vertical-align: middle;
}
/* waiting for bootstrap fix bug on nav-item-dropdown a:active
https://github.com/bootstrap-vue/bootstrap-vue/issues/2219
*/
nav li.router-link-active .navbar-dropdown-menu {
  cursor: pointer;
}

/* ==========================================================================
    Logo styles
    ========================================================================== */
.navbar-brand.logo {
  padding: 5px 5px;
}

.logo .logo-img {
  height: 45px;
  display: inline-block;
  vertical-align: middle;
  width: 70px;
}

.logo-img {
  height: 100%;
  background: url('../../../content/images/logo-jhipster.png') no-repeat center center;
  background-size: contain;
  width: 100%;
}
</style>
