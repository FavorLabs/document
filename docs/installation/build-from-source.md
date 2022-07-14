---
sidebar_label: 'Build from Source'
title: 'Build from Source'
sidebar_position: 2 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


FavorX is written using the Go language.

You can build the FavorX executable files directly from the source code.

In any system, the building process is the same, and you need to meet the following prerequisites according to your system.

- **go** - download the latest release from [golang.org](https://golang.org/dl/)
- **git** - download from [git-scm.com](https://git-scm.com/)
- **make** - usually included in most operating systems, or you can download from [https://github.com/mstorsjo/llvm-mingw/releases](https://github.com/mstorsjo/llvm-mingw/releases)

<Tabs
	defaultValue= "ubuntu"
	values= {[
	{label: 'Ubuntu', value: 'ubuntu'},
	{label: 'Windows', value: 'windows'}, 
	{label: 'MacOS', value: 'mac'},
]}>

<TabItem value="ubuntu">

1. Clone the repository

   ```bash
   git clone https://github.com/FavorLabs/favorX.git
   cd favorX
   ```

2. Build the binary

   ```bash
   make binary
   ```

3. Check you are able to run the `favorX`command. Success can be verified by running:

   ```bash
   dist/favorX version
   ```

</TabItem>

<TabItem value="windows">

1. Clone the repository

   ```bash
   git clone https://github.com/FavorLabs/favorX.git
   cd favorX
   ```

2. Build the binary

   ```bash
   make binary
   ```

3. Check you are able to run the `favorX`command.Success can be verified by running:

   ```bash
   dist\favorX.exe version
   ```

</TabItem>

<TabItem value="mac">

1. Clone the repository

   ```bash
   git clone https://github.com/FavorLabs/favorX.git
   cd favorX
   ```

2. Build the binary

   ```bash
   make binary
   ```

3. Check you are able to run the `favorX`command. Success can be verified by running:

   ```bash
   dist/favorX version
   ```

</TabItem>

</Tabs>

