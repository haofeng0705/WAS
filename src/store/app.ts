import { defineStore } from 'pinia'


export const useAppStore = defineStore('app', {
	state: (): any => ({
		activeRouter: JSON.parse(sessionStorage.getItem('activeRouter') ||  JSON.stringify(0)) ,
    weatherStatus: JSON.parse(sessionStorage.getItem('weatherStatus') || JSON.stringify('晴')) ,
		weatherTem: JSON.parse(sessionStorage.getItem('weatherTem') ||JSON.stringify('26°')) ,
		token: JSON.parse(sessionStorage.getItem('token') || JSON.stringify(''))
	}),

	getters: {},

	actions: {

		UP_ACTIVE_ROUTER(activeRouter: any) {
			this.activeRouter = activeRouter;
			sessionStorage.setItem("activeRouter", JSON.stringify(this.activeRouter));
		},

		UP_WEATHER({ status, tem } : { status: string; tem: string }) {
			this.weatherStatus = status;
			this.weatherTem = tem;
			sessionStorage.setItem(
				"weatherStatus",
				JSON.stringify(this.weatherStatus)
			);
			sessionStorage.setItem("weatherTem", JSON.stringify(this.weatherTem));
		},
		UP_TOKEN(token:any) {
			this.token = token;
			sessionStorage.setItem("token", JSON.stringify(this.token));
		}
	}
})
