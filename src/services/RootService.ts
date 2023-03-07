import axios, { AxiosResponse } from 'axios';

interface WithErrors {
  errors?: string[];
}

export class RootServiceClass {
  private readonly ROOT_URL = 'https://test-assignment.emphasoft.com/api/v1';
  private api = axios.create({ withCredentials: false });
  private route = '';

  protected _authToken = '';

  constructor() {
    this.setInterceptorRequest();
  }

  set authToken(value: string) {
    this._authToken = value;
  }

  async get<T>(path: string): Promise<AxiosResponse<T & WithErrors>> {
    this.createRoute(path);
    try {
      return await this.api.get<T>(this.route);
    } catch ({ response }) {
      return this.parseErrors<T>(response as AxiosResponse);
    }
  }

  async post<T>(path: string, payload: any): Promise<AxiosResponse<T & WithErrors>> {
    this.createRoute(path);
    try {
      return await this.api.post<T>(this.route, payload);
    } catch ({ response }) {
      return this.parseErrors<T>(response as AxiosResponse);
    }
  }

  async put<T>(path: string, payload: any): Promise<AxiosResponse<T & WithErrors>> {
    this.createRoute(path);
    try {
      return await this.api.put<T>(this.route, payload);
    } catch ({ response }) {
      return this.parseErrors<T>(response as AxiosResponse);
    }
  }

  async delete<T>(path: string): Promise<AxiosResponse<T & WithErrors>> {
    this.createRoute(path);
    try {
      return await this.api.delete<T>(this.route);
    } catch ({ response }) {
      return this.parseErrors<T>(response as AxiosResponse);
    }
  }

  private createRoute(path: string) {
    this.route = this.ROOT_URL + path;
    if (path[path.length - 1] !== '/') {
      this.route += '/';
    }
  }

  private setInterceptorRequest() {
    this.api.interceptors.request.use((config) => {
      if (!this._authToken) return config;
      config.headers.Authorization = `Token ${this._authToken}`;
      return config;
    });
  }

  private parseErrors<T>(response: AxiosResponse<T>) {
    if (response.status < 400) return response;
    if (response.data instanceof Object) {
      const errors = Object.keys(response.data).reduce((acc: string[], key) => {
        const value = (<any>response.data)[key];
        if (Array.isArray(value)) {
          value && acc.push(value[0]);
        } else if (typeof value === 'string') {
          acc.push(value);
        }
        return acc;
      }, []);
      response.data = { ...response.data, errors };
    }
    return response;
  }
}

const RootService = new RootServiceClass();

export { RootService };
