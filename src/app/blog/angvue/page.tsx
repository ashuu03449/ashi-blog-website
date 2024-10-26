"use client"
// pages/vue-angular-blog.tsx
import Image from 'next/image';
import Link from 'next/link';

const VueAngularBlog = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 md:p-8 bg-white rounded-lg shadow-lg text-center text-black overflow-hidden">
      <h1 className="text-4xl md:text-5xl font-bold text-[#8A2BE2] mb-6">
        A Beginner&apos;s Guide to Vue &amp; Angular
      </h1>

      <Image 
        src="/images/angvue.png" 
        alt="Vue vs Angular Logo"
        width={600} 
        height={400} 
        className="rounded-lg mb-6 mx-auto"
        priority
      />

      <h2 className="text-2xl md:text-3xl font-semibold text-[#7B1FA2] mb-4">Introduction</h2>
      <p className="text-black mb-6">
        Vue and Angular are popular JavaScript frameworks for building user interfaces and single-page applications. Vue is known for its simplicity and flexibility, while Angular provides a robust framework suitable for large-scale applications.
      </p>

      <div className="text-left">
        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#7B1FA2] mb-4">Getting Started with Vue</h2>
          
          <h3 className="text-xl md:text-2xl font-semibold text-[#6A1B9A] mb-2">1. Installation</h3>
          <p className="text-black mb-2">
            To install Vue CLI globally, run:
          </p>
          <pre className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
            <code className="text-green-400">npm install -g @vue/cli</code>
          </pre>

          <h3 className="text-xl md:text-2xl font-semibold text-[#6A1B9A] mb-2">2. Create a New Project</h3>
          <pre className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
            <code className="text-green-400">vue create my-vue-app</code>
          </pre>

          <h3 className="text-xl md:text-2xl font-semibold text-[#6A1B9A] mb-2">3. Main Concepts</h3>
          <p className="text-black mb-2">
            Vue uses a component-based architecture with an HTML-based template syntax. Here&apos;s an example of a basic Vue component:
          </p>
          <pre className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
            <code className="text-green-400">{`<template>
  <div>{{ message }}</div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello from Vue!'
    };
  }
}
</script>
`}</code>
          </pre>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#7B1FA2] mb-4">Getting Started with Angular</h2>
          
          <h3 className="text-xl md:text-2xl font-semibold text-[#6A1B9A] mb-2">1. Installation</h3>
          <p className="text-black mb-2">
            To install the Angular CLI globally, run:
          </p>
          <pre className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
            <code className="text-red-400">npm install -g @angular/cli</code>
          </pre>

          <h3 className="text-xl md:text-2xl font-semibold text-[#6A1B9A] mb-2">2. Create a New Project</h3>
          <pre className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
            <code className="text-red-400">ng new my-angular-app</code>
          </pre>

          <h3 className="text-xl md:text-2xl font-semibold text-[#6A1B9A] mb-2">3. Main Concepts</h3>
          <p className="text-black mb-2">
            Angular also uses a component-based architecture with a focus on TypeScript. Here&apos;s an example of a basic Angular component:
          </p>
          <pre className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
            <code className="text-red-400">{`import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<div>{{ message }}</div>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: string = 'Hello from Angular!';
}
`}</code>
          </pre>
        </section>
      </div>

      <h2 className="text-2xl md:text-3xl font-semibold text-[#7B1FA2] mb-6">Conclusion</h2>
      <p className="text-black mb-6">
        Both Vue and Angular offer unique advantages: Vue is beginner-friendly with a more flexible approach, while Angular provides a complete, structured framework ideal for large, complex applications. Choosing between them depends on your project needs and familiarity with JavaScript frameworks.
      </p>

      <div className="text-center mt-10">
        <Link href="/blog" className="text-purple-500 hover:text-purple-300 underline transition duration-200">
          Back to Blog
        </Link>
      </div>
    </div>
  );
};

export default VueAngularBlog;
