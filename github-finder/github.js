class Github {
  constructor() {
    this.client_id = '84512449d0504cb2b762';
    this.client_secret = '4a11d3281b0ee1ba3796d253799b839427fc0519';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}