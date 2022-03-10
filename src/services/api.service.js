class ApiService {
    constructor(baseUrl) {
        this.url = baseUrl;
    }

    async createPost(post) {
        try {
            const request = new Request(this.url + '/posts.json', {
                method: 'post',
                body: JSON.stringify(post),
            });
            return await getResponse(request);
        } catch (e) {
            console.log(e);
        }
    }

    async getPosts() {
        try {
            const request = new Request(this.url + '/posts.json');
            return await getResponse(request);
        } catch (e) {
            console.log(e);
        }
    }

    async getPostById(id) {
        try {
            const request = new Request(this.url + '/posts/' + id + '.json');
            return await getResponse(request);
        } catch (e) {
            console.log(e);
        }
    }
}

async function getResponse(request) {
    const response = await fetch(request);
    return await response.json();
}

export const apiService = new ApiService('https://js-blog-cb183-default-rtdb.firebaseio.com');