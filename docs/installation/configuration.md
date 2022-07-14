---
sidebar_label: 'Configuration'  
sidebar_position: 4
---
# Configuration

FavorLabs is a very flexible program and can be configured in a variety of ways depending on your use case. This expanded section will cover configuration in detail. 

## Important Configurations

:::important
Before starting FavorX for the first time, there is *some* configuration to make! Make sure you consider updating the following recommended
settings!
:::

### Full Node

By default, FavorX runs as a full node. To fully participate in the FavorX file system, you must set the `--full-node` option to `true`.

### Light Node

If you want FavorX to run as a light node, you must set the `--full-node` option to `false`.

### Chain Endpoint

If you want files to spread in FavorX, you must enable the chain endpoint.  
Our Oracle is a contract deployed on the Binance Smart Chain, running on the bsc testnet currently.  
set the `--chain-endpoint` option to `https://polygon-testnet.blastapi.io/18d7884b-202d-467d-8221-25eba9c8eca1`  
set the `--oracle-contract-addr` option to `0x21aC8FE412Fd058eD29a67a69c81EF08fA34f443`

### Boot Node

By default, FavorX runs as a separate node.  If you want to connect to our test network, you must set the `--bootnode` option to 
`/ip4/107.167.2.7/tcp/1809/p2p/12D3KooWEw5bXwg4ho63XSJCtmYdgXbVGUKrf1Uhpg3RbogLswxt` or 
`/ip6/2610:150:c009:d:216:3cff:fe62:366b/tcp/1809/p2p/12D3KooWEw5bXwg4ho63XSJCtmYdgXbVGUKrf1Uhpg3RbogLswxt`

### NAT Address

To enable others to connect to your node, you must broadcast your public IP and ensure FavorX is accessible on the correct p2p port
(default `1634`). 


First, determine your public IP address.

```bash
curl icanhazip.com
```

```bash
123.123.123.123
```

Then configure your node, including your p2p port (default `1634`).

```yaml
nat-addr: "123.123.123.123:1634"
```




## Specifying Configuration

### Configuration Priority

Configuration is processed in the following ascending order of preference:

1. Command Line Arguments
2. Environment Variables
3. Configuration File

### Command Line Arguments

Run `favorX start --help` in your Terminal to get the list of available command-line arguments.

### Environment variables

FavorX config may also be passed using environment variables.

Environment variables are set as variables in the session of your operating system or the system configuration file. To set an environment variable, type the following in your terminal session.

```bash
export VARIABLE_NAME=variableValue
```

Verify if it is correctly set by running `echo $VARIABLE_NAME`.

All available configuration options are available as `FavorX` prefixed, capitalized, and underscored environment variables.

e.g. `--api-addr` becomes `FavorX_API_ADDR`.

### Configuration file

FavorX can also be configured by providing a YAML configuration file using the `--config` flag.

```bash
favorX start --config /home/<user>/favorX.yaml 
```

## Configuration Options

FavorX provides the following options to customize your node.

### Global

#### --config

*default* `/home/<user>/.favorX.yaml`

The location of a YAML configuration file contains configuration options.

### Node

#### --full-node

*default* `true`

Enable this by setting it to `true` to fully participate in serving and forwarding chunks to the network.

#### --bootnode

*default* ``

This is a [multiaddr](https://github.com/multiformats/multiaddr) specifying the FavorX bootnodes used for bootstrapping the network. It can be of multiple values.

By default, a node connects to the FavorX mainnet.  When using a private or test network, the network-specific bootnodes must be set.

Any FavorX node in a network can act as a bootnode.

#### --bootnode-mode

*default* `false`

Cause the node to always accept incoming connections.

#### --dev-mode

*default* `false`

For option `true`, the multicast node discovery function is disabled.

#### --verbosity

*default* `info`

Log verbosity level 0=silent, 1=error, 2=warn, 3=info, 4=debug, 5=trace

### Data

#### --data-dir

*default* `/home/<user>/.favorX`

The location on your disk where FavorX stores its data. Data in this directory will be required to restore a node state using the same key.

This consists of the following three types of data.

##### 1. Chunk Data (localstore)

This consists of chunks and files that you have pinned locally, cached chunks you have requested, or chunks within your radius of responsibility which you are responsible for serving to your peers.

##### 2. State Data (statestore)

This is the information about the local state of your FavorX node and should be backed up.

##### 3. Keystore Data (keys)

These files contain the encrypted versions of your private key and should be backed up and kept private.

:::danger
Keep the key files in your keystore data directory safe!

They are the cryptographic proof of your network identity and cannot be recovered.
:::

*The next four options expose the low-level configurations for [LevelDB](https://pkg.go.dev/github.com/syndtr/goleveldb@v1.0.0/leveldb/opt#Options)'s [Openfile](https://pkg.go.dev/github.com/syndtr/goleveldb@v1.0.0/leveldb#OpenFile) method.

#### --db-driver

Database storage driver, only support leveldb/wiredtiger.

Configurations related to the data engine. You can configure one or more of the following data engines as needed.

```yaml
db-driver: driver-name[:driver-config]

driver-name: leveldb

leveldb-config: {"BlockSize":4096,"BlockCacheCapacity":33554432,"OpenFilesCacheCapacity":256,"WriteBuffer":33554432,"CompactionTableSize":2097152,"CompactionTotalSize":10485760,"DisableSeeksCompaction":false,"NoSync":false}
```

#### --db-path

default `""`

The storage address of localstore. If not configured by default, the local files will be stored in the same directory as the downloaded files, which is `data-dir`

If the path is configured, then locally uploaded files will be stored separately in the directory under this path.

#### --cache-capacity

default`80000`

The size of files that can be downloaded is 80,000 chunks by default, and each chuck is 256kb. If the downloaded files exceed this size, the system will perform the garbage collection mechanism.

### Password

#### --password

*default* `""`

The password used to decrypt the favorX identity keys.

:::danger
Passing passwords as command-line arguments is insecure. Use a password file or environment variable in the production environments.
:::

#### --password-file

*default* `""`

The path to a file that contains a password for decrypting keys. The empty string assumes no file is presented.

### OpenAPI / RPC

#### --cors-allowed-origins

*default* `[]`

HTTP/WS origin domains or wildcards defined them, to which the API will allow responses, e.g.

```bash
favorX start --cors-allowed-origins="*"
```

#### --ws-addr

default `1637`

Port of "rpc websocket".

### OpenAPI / API

#### --api-addr

*default* `:1633`

The IP and port the API will serve HTTP requests from. Omitting the IP part of the address will cause the server to listen to all interfaces. Argument values are of the form '132.132.132.132:1633'.

#### --gateway-mode

*default* `false`

Set this to `true` to disable a set of sensitive features in the API to ensure that it is safe to expose your `api-addr` to the public Internet.

### OpenAPI / Debug 

#### --debug-api-enable

*default* `false`

Set this to `true` to enable access to the Debug API

#### --debug-api-addr

*default* `:1635`

The IP and port the Debug API.

Omitting the IP part of the address will cause the server to listen to all requests.

`--debug-api-enable` must be set to `true`.

### OpenAPI / Permissions

#### --restricted

Enable permission check on the http APIs.

#### --token-encryption-key

Admin username to get the security token.

#### --admin-password

Bcrypt hash of the admin password to get the security token.

### OpenAPI / Secure Transport

#### --enable-api-tls

Enable https to api/debug api.

#### --tls-crt-file        

https certificate file path.

####  --tls-key-file       

https private key file path .

### Chain

###### --chain-enpoint

Link to chain endpoint.

#### Oracle

###### --oracle-contract-addr  

Link to oracle contract.


#### Resolver

##### --resolver-options

default`[]`

The proxy address for ENS service. ENS compatible API endpoint for a TLD and with contract address, which can be repeated, format [tld:]contract-addr[@url]. If only contract-addr is configured, then endpoint will use chain-enpoint.  

### P2P

#### --network-id

*default* `10`

The network ID for which to accept new connections.

#### --welcome-message

*default* `""`

The custom welcome message to be displayed to peers on successful connection.

#### --p2p-addr

*default* `:1634`

The IP and port to listen for p2p protocol messages.

#### --nat-addr

*default* `""`

Set the expected public IP. Normally this is automatically generated, but in certain circumstances, it may be desirable to set it manually.

#### --p2p-quic-enable

*default* `false`

#### --p2p-ws-enable

*default* `false`

Enables the web-sockets transport for p2p communications.

#### --standalone

*default* `false`

For option `true`, the node to start with no listen to addresses for p2p.

#### --bin-max-peers

*default* `20`

The max limit of kademlia every k bucket connected peers max limit.

#### --light-max-peers

*default* `1000`

The max limit of connected light nodes.

#### --allow-private-cidrs

default `false`

This configuration sets whether to allow private IPs to be published to the public network.

#### --route-alpha 

Each route search will return alpha routes.

### Files

#### --global-pinning-enable

*default* `false`

Enables the Global Pinning functionality when set to `true`.

#### --api-file-buffer-multiple

default `8`

When downloading files through the API, set the size of the default cache file to 8 times the size of the block file.

### Tracing

#### --tracing-enable

*default* `false`

Sends tracing spans to the tracing service.


#### --tracing-endpoint

*default* `127.0.0.1:6831`

The URL where the tracing service listens for Thrift protocol UDP messages.

#### --tracing-service-name

*default* `favorX`

The FavorX service identifier in tracing spans.




