import Image from 'next/image';
import Link from 'next/link';

const Next = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg overflow-x-hidden">
      <h1 className="text-4xl font-bold text-purple-600 text-center mb-6">Getting Started with Next.js</h1>
      <Image 
        src="/images/nextjs.png" // Replace with your image path
        alt="Next.js Illustration"
        width={700} 
        height={400} 
        className="rounded-lg mb-6 mx-auto max-w-full h-auto" // Add max-w-full and h-auto
      />

      <h2 className="text-3xl font-semibold text-purple-600 mb-4">What is Next.js?</h2>
      <p className="text-gray-800 mb-4">
        Next.js is a powerful React framework that enables developers to build server-rendered applications with ease. It offers features like static site generation, server-side rendering, and API routes, making it a popular choice for creating performant and scalable web applications.
      </p>

      <h2 className="text-3xl font-semibold text-purple-600 mb-4">Key Features of Next.js 15</h2>
      <p className="text-gray-800 mb-4">
        With the release of Next.js 15, developers can enjoy several exciting features designed to optimize performance and streamline development:
      </p>

      <ul className="list-disc list-inside text-gray-800 mb-4">
        <li><strong>React 19 RC Integration:</strong> Next.js 15 integrates React 19 RC, offering enhanced capabilities but also presenting dependency challenges for those upgrading.</li>
        <li><strong>Experimental React Compiler:</strong> A new compiler reduces the need for manual memoization, simplifying code but may introduce instability in larger projects.</li>
        <li><strong>Revised Caching Semantics:</strong> Default behavior has shifted to uncached requests, requiring manual configuration for caching strategies.</li>
        <li><strong>Hot Module Replacement (HMR) Enhancements:</strong> Improved HMR reduces unnecessary network calls when saving changes to server components.</li>
      </ul>

      <h2 className="text-3xl font-semibold text-purple-600 mb-4">Challenges in Upgrading to Next.js 15</h2>
      <p className="text-gray-800 mb-4">
        While Next.js 15 offers many benefits, developers face specific challenges during the upgrade process:
      </p>

      <h3 className="text-2xl font-semibold text-purple-600 mb-2">1. Dependency Issues with React 19 RC</h3>
      <p className="text-gray-800 mb-4">
        The introduction of React 19 RC has led to dependency conflicts. Developers often encounter unmet peer dependency errors. It’s crucial to update all project dependencies before upgrading Next.js.
      </p>

      <h3 className="text-2xl font-semibold text-purple-600 mb-2">2. Experimental React Compiler</h3>
      <p className="text-gray-800 mb-4">
        The new React Compiler aims to optimize code but may introduce unexpected issues. It can be enabled or disabled in <code>next.config.js</code> to mitigate risks during critical application development.
      </p>

      <h3 className="text-2xl font-semibold text-purple-600 mb-2">3. Revised Caching Semantics</h3>
      <p className="text-gray-800 mb-4">
        With default uncached requests, developers must now manually configure caching strategies. Solutions include using <code>force-cache</code> in fetch or configuring route handlers appropriately.
      </p>

      <h3 className="text-2xl font-semibold text-purple-600 mb-2">4. Hot Module Replacement (HMR) Challenges</h3>
      <p className="text-gray-800 mb-4">
        The updated HMR feature can lead to unintended repeated API calls. However, caching fetch responses can significantly reduce unnecessary network calls when properly validated.
      </p>

      <h2 className="text-3xl font-semibold text-purple-600 mb-4">Lessons from Previous Versions: Next.js 13</h2>
      <p className="text-gray-800 mb-4">
        The transition to Next.js 13 provided valuable lessons that can help in upgrading to Next.js 15:
      </p>

      <h3 className="text-2xl font-semibold text-purple-600 mb-2">1. Introduction of App Router and React Server Components</h3>
      <p className="text-gray-800 mb-4">
        Developers faced migration challenges due to the shift from the Pages Router to the App Router. Community resources and migration guides helped ease this transition.
      </p>

      <h3 className="text-2xl font-semibold text-purple-600 mb-2">2. Incremental Adoption Strategy</h3>
      <p className="text-gray-800 mb-4">
        Many opted for a hybrid approach, gradually integrating new features to minimize risks associated with breaking changes. This strategy remains relevant for Next.js 15.
      </p>

      <h3 className="text-2xl font-semibold text-purple-600 mb-2">3. Caching and Data Fetching Improvements</h3>
      <p className="text-gray-800 mb-4">
        The community shared insights on data fetching strategies, helping developers make informed decisions about performance optimization.
      </p>

      <h3 className="text-2xl font-semibold text-purple-600 mb-2">4. Adoption of New Tooling</h3>
      <p className="text-gray-800 mb-4">
        Updates to tooling, such as ESLint and TypeScript integration, presented compatibility challenges. Active community engagement helped improve the framework collectively.
      </p>

      <h2 className="text-3xl font-semibold text-purple-600 mb-4">Advantages of Early Adoption</h2>
      <p className="text-gray-800 mb-4">
        Early adoption of Next.js 15 provides a unique opportunity to position oneself as an industry leader. By documenting experiences through blogs and open-source contributions, developers can contribute to the community while enhancing their understanding.
      </p>

      <h2 className="text-3xl font-semibold text-purple-600 mb-4">Conclusion</h2>
      <p className="text-gray-800 mb-4">
        Next.js continues to evolve, providing robust tools for building modern web applications. The transition to Next.js 15, despite its challenges, opens up new avenues for performance and developer experience. By learning from past upgrades and engaging with the community, developers can navigate these changes successfully.
      </p>

      <h2 className="text-3xl font-semibold text-purple-600 mb-4">Streaming Support in Next.js 15</h2>
      <p className="text-gray-800 mb-4">
        One of the standout features of Next.js 15 is its improved support for streaming. This allows developers to send HTML fragments to the client as they are generated, enhancing perceived performance. Here’s an example of how to implement a streaming response in an API route:
      </p>
      
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto"> {/* Added overflow-x-auto */}
        <code>
          {`// pages/api/stream.ts\n
import { NextApiRequest, NextApiResponse } from 'next';

const streamData = async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');

  for (let i = 0; i < 5; i++) {
    res.write(\`data: { "message": "Streaming message \${i + 1}" }\n\n\`);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
  }
  res.end();
};

export default streamData;`}
        </code>
      </pre>

      <p className="text-gray-800 mb-4">
        In this example, the server streams data to the client over a period, allowing the user to see updates without waiting for all the data to load. This is especially useful for real-time applications and dynamic content.
      </p>

      <h2 className="text-3xl font-semibold text-purple-600 mb-4">Image Optimization Improvements</h2>
      <p className="text-gray-800 mb-4">
        Next.js 15 also enhances image optimization capabilities, serving images in the best formats automatically. Developers can use the <code>next/image</code> component to leverage these improvements easily:
      </p>
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code>
          {`<Image 
  src="/path/to/image.jpg"
  alt="Optimized Image"
  width={500}
  height={300}
  priority
/>`}
        </code>
      </pre>
      <p className="text-gray-800 mb-4">
        This component optimizes images on-the-fly, ensuring faster load times and improved user experience.
      </p>

      <h2 className="text-3xl font-semibold text-purple-600 mb-4">Community and Learning Resources</h2>
      <p className="text-gray-800 mb-4">
        Engaging with the Next.js community can provide valuable insights and support during the upgrade process. Consider the following resources:
      </p>
      <ul className="list-disc list-inside text-gray-800 mb-4">
        <li>Official Next.js Documentation</li>
        <li>Next.js Discord Channel for Community Support</li>
        <li>Open Source Projects on GitHub for Learning</li>
        <li>Webinars and Workshops on Next.js Best Practices</li>
      </ul>

      <h2 className="text-3xl font-semibold text-purple-600 mb-4">Final Thoughts</h2>
      <p className="text-gray-800 mb-4">
        The transition to Next.js 15 is an exciting journey filled with learning opportunities. By leveraging community resources, embracing new features, and addressing challenges proactively, developers can maximize the benefits of this robust framework.
      </p>

      <div className="text-center mt-8">
            <Link href="/blog" className="text-blue-600 underline hover:text-purple-600">
               Back to Blog
            </Link>
          </div>
    </div>
  );
};

export default Next;
