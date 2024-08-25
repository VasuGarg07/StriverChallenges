
# Running TypeScript Files with ts-node

This guide explains how to run TypeScript files directly using `ts-node`, bypassing the need to manually compile the `.ts` files into `.js`.

## Prerequisites

- Node.js installed on your machine. You can download it from [Node.js official website](https://nodejs.org/).
- NPM (Node Package Manager), which comes with Node.js.

## Steps

1. **Install ts-node and TypeScript**:  
   Open your terminal and run the following command to install both `ts-node` and the TypeScript compiler globally:

   ```bash
   npm install -g ts-node typescript
   ```

2. **Run Your TypeScript File**:  
   Navigate to the directory containing your `.ts` file and run it directly using `ts-node`:

   ```bash
   npx ts-node yourfile.ts
   ```

Replace `yourfile.ts` with the path to your TypeScript file.

## Additional Information

- **ts-node** simplifies the development process by allowing you to execute TypeScript code directly without pre-compilation.
- For more complex projects, consider setting up a `tsconfig.json` file to customize compiler options.
