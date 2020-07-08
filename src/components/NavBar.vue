<template>
  <div class>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand href="#">Expense Tracker</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <b-button variant="light" pill>
              <router-link to="/">Dashboard</router-link>
            </b-button>
          </b-nav-item>
          <b-nav-item>
            <b-button variant="light" pill>
              <router-link to="/about">About</router-link>
            </b-button>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>-->

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <b-icon-person-fill />
            </template>
            <b-dropdown-item>Profile</b-dropdown-item>
            <b-dropdown-item>Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.navbar {
  border-radius: 5px;
  margin: auto;
  box-shadow: 5px 5px 5px grey;
}
</style>
