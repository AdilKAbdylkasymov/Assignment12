new Vue({
    el: '#app',
    data: {
      user: {
        name: 'John Doe',
        email: 'john@example.com',
        profilePicture: 'default.jpg',
        isAdmin: true,
        birthdate: '1990-01-01',
      },
      lastUpdated: '',
    },
    computed: {
      userAge: function() {
        const birthYear = new Date(this.user.birthdate).getFullYear();
        const currentYear = new Date().getFullYear();
        return currentYear - birthYear;
      },
    },
    methods: {
      updateProfile: function() {
        this.lastUpdated = new Date().toLocaleString();
        // You can add logic to save the updated profile to a server here
      },
      updateProfilePicture: function(event) {
        const file = event.target.files[0];
        // Logic to handle profile picture update
        this.lastUpdated = new Date().toLocaleString();
      },
    },
    watch: {
      'user.name': function(newValue, oldValue) {
        console.log(`Name changed from ${oldValue} to ${newValue}`);
      },
      'user.email': function(newValue, oldValue) {
        console.log(`Email changed from ${oldValue} to ${newValue}`);
      },
    },
    created: function() {
  
      setTimeout(() => {
        this.user = {
          name: 'John Doe',
          email: 'john@example.com',
          profilePicture: 'default.jpg',
          isAdmin: true,
          birthdate: '1990-01-01',
        };
      }, 1000);
    },
    mounted: function() {
      console.log('Component is mounted');
    },
  });