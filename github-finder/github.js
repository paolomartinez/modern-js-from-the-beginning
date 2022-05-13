class Github {
  constructor() {
    this.client_id = '84512449d0504cb2b762';
    this.client_secret = '33ea61da484bfc361ecfb745a1d726fda5007b1e';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  //TODO update the authorization to use access token; currently we are still limited in number of requests we can make
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}