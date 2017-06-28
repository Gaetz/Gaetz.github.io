import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogPostsComponent } from './components/blog-posts/blog-posts.component';
import { BlogPostDetailsComponent } from './components/blog-post-details/blog-post-details.component';
import { AdminComponent } from './components/admin/admin.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/blog',
        pathMatch: 'full'
    },
    {
        path: 'blog',
        component: BlogPostsComponent
    },
    {
        path: 'blog/category/:id',
        component: BlogPostsComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'blog/post/:id',
        component: BlogPostDetailsComponent
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
