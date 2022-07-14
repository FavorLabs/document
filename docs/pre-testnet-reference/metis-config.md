---
sidebar_label: 'Metis Config'
sidebar_position: 2
---
 
# Config

### Precondition
Please download the latest version of favorx first.

If the configuration is not filled in properly, the accounting function may not work properly (you will be unable to obtain test coins and exchange cheques properly)

In order to get the node up and running properly during the pre-testnet phase, please ensure that the following configuration is correct

### Network ID

```yaml
network-id: "20"
```

### Boot Node

Modify the bootnode to 

```yaml
bootnode: 
- /ip4/107.167.2.7/tcp/1800/p2p/12D3KooWJkSsFDb4kGBtd4aN85RPswX7aJWAf391xkC8nuADcQc3
- /ip6/2610:150:c009:d:216:3cff:fe62:366b/tcp/1800/p2p/12D3KooWJkSsFDb4kGBtd4aN85RPswX7aJWAf391xkC8nuADcQc3
```

### Chain

The chain endpoint related to Oracle, traffic, and resolver options is configured as follows

```yaml
chain-endpoint: "https://stardust.metis.io/?owner=588"
```
#### Oracle

To register files, you'd better modify the configuration to

```yaml
oracle-contract-addr: "0xFA91ac31c104b1fEa9DB2670031736d94Cfac6F3"
```

### Example

For the complete configuration file, please refer to the following:

```yaml
allow-private-cidrs: false
api-addr: :1633
api-file-buffer-multiple: 8
bin-max-peers: 50
bootnode: 
- /ip4/107.167.2.7/tcp/1800/p2p/12D3KooWJkSsFDb4kGBtd4aN85RPswX7aJWAf391xkC8nuADcQc3
- /ip6/2610:150:c009:d:216:3cff:fe62:366b/tcp/1800/p2p/12D3KooWJkSsFDb4kGBtd4aN85RPswX7aJWAf391xkC8nuADcQc3
bootnode-mode: false
cache-capacity: "80000"
chain-endpoint: "https://stardust.metis.io/?owner=588"
cors-allowed-origins: ["*"]
data-dir: FavorLabs
db-driver: leveldb
db-path: ""
debug-api-addr: :1635
debug-api-enable: true
dev-mode: false
full-node: true
gateway-mode: false
global-pinning-enable: false
help: false
light-max-peers: 100
nat-addr: ""
network-id: "20"
oracle-contract-addr: "0xFA91ac31c104b1fEa9DB2670031736d94Cfac6F3"
p2p-addr: :1634
p2p-quic-enable: false
p2p-ws-enable: false
password: "FavorLabs"
password-file: ""
restricted: false
route-alpha: 2
standalone: false
token-encryption-key: ""
tracing-enable: false
tracing-endpoint: 127.0.0.1:6831
tracing-service-name: FavorLabs
verbosity: info
welcome-message: ""
ws-addr: :1637
```

