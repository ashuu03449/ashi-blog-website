// pages/python-blog.tsx
import Image from 'next/image';
import Link from 'next/link';

const Pythonblog = () => {
  return (
    <div className="max-w-5xl items-center text-center mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-purple-500 text-center mb-6">
        A Beginner&#39;s Guide to Modern Python
      </h1>
      <Image 
        src="/images/py.png" // Ensure the image path is correct
        alt="Python Logo"
        width={500} 
        height={300} 
        className="rounded-lg mb-6 mx-auto"
      />
      <h2 className="text-3xl font-semibold text-purple-500 mb-4">
        Getting Started with Modern Python
      </h2>
      <p className="text-black mb-4">
        Python is a versatile programming language used in areas like data science, web development, AI, and automation. Its ease of use makes it ideal for both beginners and experts. Let&#39;s explore the basics and get you started with Python.
      </p>

      <h2 className="text-3xl font-semibold text-purple-500 mb-4">
        What is Python?
      </h2>
      <p className="text-black mb-4">
        Python is a high-level, open-source programming language known for its simplicity and readability. It supports multiple programming paradigms, including object-oriented and procedural programming.
      </p>

      <h2 className="text-3xl font-semibold text-purple-500 mb-4">
        Why Use Python?
      </h2>
      <ul className="list-disc list-inside text-black mb-4">
        <li><strong>Versatility:</strong> From AI to web development, Python offers libraries for every purpose.</li>
        <li><strong>Easy to Learn:</strong> Its simple syntax makes it great for beginners.</li>
        <li><strong>Community Support:</strong> Python&#39;s extensive community provides countless resources and frameworks.</li>
      </ul>

      <h2 className="text-3xl font-semibold text-purple-500 mb-4">
        Getting Started with Python
      </h2>

      <h3 className="text-2xl font-semibold text-purple-400 mb-2">
        1. Install Python
      </h3>
      <p className="text-black mb-4">
        Download Python from <a href="https://www.python.org/downloads/" className="text-purple-400 underline">python.org</a> and follow the installation guide. After installation, verify by running:
      </p>
      <pre className="bg-gray-900 p-4 rounded text-white mb-4">
        <code>python --version</code>
      </pre>

      <h3 className="text-2xl font-semibold text-purple-400 mb-2">
        2. Write Your First Python Program
      </h3>
      <p className="text-black mb-4">
        Create a file named <code>hello.py</code> and write the following code:
      </p>
      <pre className="bg-gray-900 p-4 rounded text-white mb-4">
        <code>{`# hello.py\nprint("Hello, Python!")`}</code>
      </pre>

      <p className="text-black mb-4">
        Run the file in your terminal with:
      </p>
      <pre className="bg-gray-900 p-4 rounded text-white mb-4">
        <code>python hello.py</code>
      </pre>

      <h3 className="text-2xl font-semibold text-purple-400 mb-2">
        3. Variables and Data Types
      </h3>
      <p className="text-black mb-4">
        In Python, variables are dynamically typed. Here’s an example:
      </p>
      <pre className="bg-gray-900 p-4 rounded text-white mb-4">
        <code>{`name = "Python"\nversion = 3.10\nis_popular = True`}</code>
      </pre>

      <h3 className="text-2xl font-semibold text-purple-400 mb-2">
        4. Exploring Python Libraries
      </h3>
      <ul className="list-disc list-inside text-black mb-4">
        <li><strong>Data Science:</strong> Pandas, NumPy, and Matplotlib</li>
        <li><strong>Web Development:</strong> Django and Flask</li>
        <li><strong>AI & ML:</strong> TensorFlow and PyTorch</li>
      </ul>

      <h2 className="text-3xl font-semibold text-purple-500 mb-4">
        Compiling Python Code
      </h2>
      <p className="text-black mb-4">
        Unlike TypeScript, Python doesn&#39;t require compilation. You simply run your code directly in the interpreter, which makes it great for quick testing and prototyping.
      </p>

      <h2 className="text-3xl font-semibold text-purple-500 mb-4">
        Conclusion
      </h2>
      <p className="text-black mb-4">
        Python is an amazing language for both beginners and professionals. Its simplicity, versatility, and strong community support make it an essential tool for modern development. Start coding with Python today, and unlock endless possibilities!
      </p>

      <div className="text-center mt-8">
        <Link href="/blog" className="text-blue-600 underline hover:text-purple-600">
          Back to Blog
        </Link>
      </div>
    </div>
  );
};

export default Pythonblog;
