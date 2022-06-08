# Parent-Hotline

## Prerequisite

You will need the following:
- [Twilio Account](https://www.twilio.com/try-twilio)
- [Sync Service SID](https://www.twilio.com/console/sync/services)
- Phone Number
## Getting Started

1. git clone this project.

2. Navigate to the `/twilio/serverless`.

4. Execute the following commands:

```sh
npm install
```

```
twilio serverless:deploy
```

5. Copy the Domain Name. It should look like this **serverless-##-dev**.

6. Go to [Twilio Studio](https://console.twilio.com/us1/develop/studio/flows)

7. Create a new Studio Flow and import the **/twilio/studio/Parent-Hotline-Outbound.json**.

8. Copy the **Parent-Hotline-Outbound** Flow SID.

9. Create a new Studio Flow and import the **/twilio/studio/Parent-Hotline-Inbound.json**.

10. Click on the **SetGlobalBariables** widget.

11. Add your Sync Service SID, Parent Hotline Outbound Flow SID, and Serverless Doman Name.

12. Click Save and Click Publish.

13. Go to your Phone Number and set the `When the call comes in` to the **Parent-Hotline-Inbound**.
## Adding the Parents.

1. The Sync Service, add a document.

2. The document field values should be the following:

- Unique Name: Twilio Phone Number
- Document Data:
```json
{"Parents":["+1XXXXXXXXXX","+1XXXXXXXXXX"]}
``` 