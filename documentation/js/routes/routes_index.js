var ROUTES_INDEX = {
  name: "<root>",
  kind: "module",
  className: "AppModule",
  children: [
    {
      name: "routes",
      filename: "src/app/app-routing.module.ts",
      module: "AppRoutingModule",
      children: [
        {
          path: "",
          loadChildren: "./user/user.module#UserModule",
          canActivate: ["AuthenticationGuard"],
          children: [
            {
              kind: "module",
              children: [
                {
                  name: "routes",
                  filename: "src/app/user/user-routing.module.ts",
                  module: "UserRoutingModule",
                  children: [
                    {
                      path: "",
                      component: "UserComponent",
                      children: [
                        { path: "", redirectTo: "/users", pathMatch: "full" },
                        { path: "users", component: "UserListComponent" },
                      ],
                    },
                  ],
                  kind: "module",
                },
              ],
              module: "UserModule",
            },
          ],
        },
        {
          path: "auth",
          loadChildren: "./auth/auth.module#AuthModule",
          children: [
            {
              kind: "module",
              children: [
                {
                  name: "routes",
                  filename: "src/app/auth/auth-routing.module.ts",
                  module: "AuthRoutingModule",
                  children: [
                    {
                      path: "",
                      component: "AuthComponent",
                      children: [
                        { path: "", redirectTo: "/login", pathMatch: "full" },
                        { path: "login", component: "LoginComponent" },
                      ],
                    },
                  ],
                  kind: "module",
                },
              ],
              module: "AuthModule",
            },
          ],
        },
        { path: "**", redirectTo: "/users" },
      ],
      kind: "module",
    },
  ],
};
