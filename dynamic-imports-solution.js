// pages/dynamic-imports-solution.js (Server Component)

export default async function DynamicImportsPage() {
  const modules = ["module1", "module2", "module3"];

  // Ensure all imports resolve before rendering
  const components = await Promise.all(
    modules.map(async (module) => {
      const { default: Component } = await import(`./dynamic-modules/${module}`);
      return <Component key={module} />
    })
  );

  return (
    <div>
      {components}
    </div>
  );
}

// pages/dynamic-modules/module1.js (Server Component)

export default function Module1() {
  return <p>Module 1</p>;
}

// pages/dynamic-modules/module2.js (Server Component)

export default function Module2() {
  return <p>Module 2</p>;
}

// pages/dynamic-modules/module3.js (Server Component)

export default function Module3() {
  return <p>Module 3</p>;
}
