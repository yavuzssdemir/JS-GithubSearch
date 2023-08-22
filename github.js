class Github {
  constructor() {
    this.client_id = "c93be159f231936cace4";
    this.client_secret = "ef57a0e808fd579a5e84c17f54d5ac64cbe6edc1";
    this.repo_count = 10;
    this.repos_sort = "asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repo_count}sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    console.log(repos);
    
    return { profile, repos };
  }
}

export default Github;
