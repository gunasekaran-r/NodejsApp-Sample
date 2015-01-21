# NodejsApp-Sample

This is a sample Node application to create AWS EC2 instance using 
AWS SDK


Instructions to run
--
Set up the environment(Access Key and Secret Keys) variables at run.bat

Run the run.bat to create the instance.

It would return the instance id.


Appendix
--

Those who wants to run it behind the NTLM proxy, can run it with the help of 
CNTLM.

Instructions.

1. Download (CNTLM)[http://cntlm.sourceforge.net/] installer and run it.

2. Find and fill in these fields in cntlm.ini. Do not fill in the Password field, it's never a good idea to store unencrypted passwords in text files.

Username    YOUR_USERNAME
Domain      YOUR_DOMAIN
Proxy       YOUR_PROXY_IP:PORT
Listen      53128
3. Open console, and type these commands to generate password hashes.

> cd c:\The_install_directory_of_cntlm
> cntlm -c cntlm.ini -I -M http://aws.amazon.com
It will ask for your password (again whatever you use to log in to Windows). Hopefully it will print 'http 200 ok' somewhere, and print your cryptic tokens authentication information. eg:

Password: ...type proxy password here...
PassNTLMv2      91E810C86B3FD1BD14342F945ED42CD6

4. Copy the above token line into cntlm.ini, under the Domain field's line. Once more, do not fill in the Password field. Save cntlm.ini.

5. Open the Service Manager (from command line: services.msc), and start the service called "CNTLM Authentication Proxy".
  or from command line run net start cntlm

6. In the console, type these lines:

> npm config set proxy http://localhost:53128
> npm config set https-proxy http://localhost:53128
> npm config set registry http://registry.npmjs.org

7. Now npm start, npm install, npm view etc. should work. 
