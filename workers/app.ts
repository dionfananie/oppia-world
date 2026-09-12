import { createRequestHandler } from "react-router";
import { handleAssetsApi } from "./api/assets";

import * as serverBuild from "virtual/react-router/server-build";
declare module "react-router" {
	export interface AppLoadContext {
		cloudflare: {
			env: Env;
			ctx: ExecutionContext;
		};
	}
}

const requestHandler = createRequestHandler(serverBuild, import.meta.env.MODE);

export default {
	fetch(request, env, ctx) {
		const url = new URL(request.url);
		if (url.pathname.startsWith("/api/assets")) {
			return handleAssetsApi(request, env);
		}
		return requestHandler(request, {
			cloudflare: { env, ctx },
		});
	},
} satisfies ExportedHandler<Env>;
