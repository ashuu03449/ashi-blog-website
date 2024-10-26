import Image from 'next/image';
import Link from 'next/link';

const TypescriptBlog = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg overflow-x-hidden">
      <h1 className="text-4xl font-bold text-blue-500 text-center mb-6">
        A Beginner&apos;s Guide to Modern TypeScript
      </h1>
      <Image 
        src="/images/ts.png" // Replace with the correct image path
        alt="TypeScript Logo"
        width={500} 
        height={300} 
        className="rounded-lg mb-6 mx-auto"
      />

      <h2 className="text-3xl font-semibold text-blue-500 mb-4">
        Getting Started with TypeScript
      </h2>
      <p className="text-black mb-4 max-w-full break-words px-2 sm:px-4">
        TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It&apos;s ideal for large codebases and collaborative projects, offering features like static typing and improved code readability.
      </p>

      <h2 className="text-3xl font-semibold text-blue-500 mb-4">
        What is TypeScript?
      </h2>
      <p className="text-black mb-4 max-w-full break-words px-2 sm:px-4">
        TypeScript is developed by Microsoft and extends JavaScript by adding types. It provides better tooling for large projects, making code easier to read, debug, and maintain.
      </p>

      <h2 className="text-3xl font-semibold text-blue-500 mb-4">
        Why Use TypeScript?
      </h2>
      <ul className="list-disc list-inside text-black mb-4 px-2 sm:px-4">
        <li><strong>Static Typing:</strong> Detect errors early with type checking.</li>
        <li><strong>Improved Readability:</strong> Types make your intentions clear.</li>
        <li><strong>Better Tooling:</strong> Enhanced code navigation and refactoring.</li>
      </ul>

      <h2 className="text-3xl font-semibold text-blue-500 mb-4">
        Getting Started with TypeScript
      </h2>

      <h3 className="text-2xl font-semibold text-blue-400 mb-2">
        1. Install TypeScript
      </h3>
      <p className="text-black mb-4 max-w-full break-words px-2 sm:px-4">
        Install TypeScript globally using npm. In your terminal, run:
      </p>
      <pre className="bg-gray-900 p-4 rounded text-white mb-4 overflow-x-auto">
        <code>npm install -g typescript</code>
      </pre>

      <h3 className="text-2xl font-semibold text-blue-400 mb-2">
        2. Write Your First TypeScript Program
      </h3>
      <p className="text-black mb-4 max-w-full break-words px-2 sm:px-4">
        Create a file named <code>hello.ts</code> and add the following code:
      </p>
      <pre className="bg-gray-900 p-4 rounded text-white mb-4 overflow-x-auto">
        <code>
          {`// hello.ts\nconst greeting: string = "Hello, TypeScript!";\nconsole.log(greeting);`}
        </code>
      </pre>

      <p className="text-black mb-4 max-w-full break-words px-2 sm:px-4">
        Compile the TypeScript file to JavaScript using:
      </p>
      <pre className="bg-gray-900 p-4 rounded text-white mb-4 overflow-x-auto">
        <code>tsc hello.ts</code>
      </pre>

      <h3 className="text-2xl font-semibold text-blue-400 mb-2">
        3. Type Annotations
      </h3>
      <p className="text-black mb-4 max-w-full break-words px-2 sm:px-4">
        TypeScript allows you to specify types, making your code more readable and less error-prone:
      </p>
      <pre className="bg-gray-900 p-4 rounded text-white mb-4 overflow-x-auto">
        <code>
          {`let age: number = 25;\nlet name: string = "TypeScript";\nlet isCool: boolean = true;`}
        </code>
      </pre>

      <h3 className="text-2xl font-semibold text-blue-400 mb-2">
        4. Exploring TypeScript Libraries
      </h3>
      <ul className="list-disc list-inside text-black mb-4 px-2 sm:px-4">
        <li><strong>Data Validation:</strong> Zod and Yup</li>
        <li><strong>UI Components:</strong> React, Vue, Angular</li>
        <li><strong>API Communication:</strong> Axios</li>
      </ul>

      <h2 className="text-3xl font-semibold text-blue-500 mb-4">
        Compiling TypeScript Code
      </h2>
      <p className="text-black mb-4 max-w-full break-words px-2 sm:px-4">
        TypeScript code is compiled to JavaScript, allowing it to run in any JavaScript environment. Use <code>tsc</code> to compile your code to JavaScript, making it compatible with browsers and servers.
      </p>

      <h2 className="text-3xl font-semibold text-blue-500 mb-4">
        Conclusion
      </h2>
      <p className="text-black mb-4 max-w-full break-words px-2 sm:px-4">
        TypeScript adds powerful tools to JavaScript, making your code safer and more maintainable. Start with TypeScript today to unlock the full potential of modern JavaScript development!
      </p>

      <div className="text-center mt-8">
        <Link href="/blog" className="text-blue-600 underline hover:text-purple-600">
          Back to Blog
        </Link>
      </div>
    </div>
  );
};

export default TypescriptBlog;
