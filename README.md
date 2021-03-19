# React Native Generator CLI

RCT generator is command line program, built to make generating react boilerplate code easier.

**Installation**

Install `rct-generator` globally to use it in different project folders seamlessly.

```sh
# using npm
npm install rct-generator -g

# or using yarn
yarn global add rct-generator
```

**Generate a screen**

Creates a folder with a container.tsx, component.tsx, style.ts and an index.ts files.

```
rct-generator g screen test-component

rct-generator g component test-component --screen
```

**Generate a component**

Creates a folder with a component.tsx, style.ts and an index.ts files.

```
rct-generator g component test-component
```

**Generate redux and api call files**

Creates an action, reducer and types files enclose in their respective folders

```
rct-generator g redux auth
```
