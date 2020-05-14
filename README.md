# Employee App
Sample Employee app built with Ext JS 7.2 Modern (frontend) and RAD Studio (backend). 

## Prerequisites

- Sencha Architect 4.2.8+
- RAD Studio 10.3+

The database used in this demo is the sample Employee Interbase database file installed with RAD Studio.

## Setup

1. Do a build/initialization of the Ext JS app and ensure the framework folder is created (the `ext` folder).

1. After installing RAD Studio, copy the `emsserver.ini` config file from the `server/emsserver/` 
folder in this repository to the default EMS folder (`C:\Users\Public\Documents\Embarcadero\EMS`).

1. Update the path at the end of the `emsserver.ini` config file to point to your local copy of the 
client app.

1. Load the RAD Studio project from the `server` folder in this repository and run it.

1. Use the RAD Server Management Console (`RSConsole.exe`) to create a new Group called `admin`. This
group is pre-configured to have access to the client app, as defined in the `emsserver.ini` config file.

1. Use the RAD Server Management Console (`RSConsole.exe`) to create a new User, which can have
whatever name and password you choose.  Assign this new User to the `admin` Group.

1. Access the client app by clicking the `Open Browser` button in the RAD Development Server window,
and changing the URL to the path of the Ext JS app, e.g. `http://localhost:8080/app/`.
