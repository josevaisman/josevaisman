---
layout: page
title: "Persistent notification"
description: "Instructions on how to integrate persistent notifications into Home Assistant."
date: 2016-06-25 10:00
sidebar: true
comments: false
sharing: true
footer: true
logo: home-assistant.png
ha_category: Other
ha_release: 0.23
---

The `persistent_notification` can be used to show a message on the frontend that has to be dismissed by the user.

<p class='img'>
  <img src='/images/screenshots/persistent-notification.png' />
</p>

### {% linkable_title Service %}

The service `persistent_notification/create` takes in `message`, `title`, and `notification_id`.

| Service data attribute | Optional | Description |
| ---------------------- | -------- | ----------- |
| `message`              |       no | Body of the notification.
| `title`                |      yes | Title of the notification.
| `notification_id`      |      yes | If `notification_id` is given, it will overwrite the notification if there already was a notification with that ID.

The `persistent_notification` component supports specifying [templates](/topics/templating/) for both the `message` and the `title`. This will allow you to use the current state of Home Assistant in your notifications.

In an [action](https://home-assistant.io/getting-started/automation-action/) of your [automation setup](/getting-started/automation/) it could look like this with a customized subject.

```yaml
action:
  service: persistent_notification.create
  data:
    message: "Your message goes here"
    title: "Custom subject"
```

The service `persistent_notification/dismiss` requires a `notification_id`.

| Service data attribute | Optional | Description |
| ---------------------- | -------- | ----------- |
| `notification_id`      |      no  | the `notification_id` is required to identify the notification that should be removed.

This service allows you to remove a notifications by script or automation.

```yaml
action:
  service: persistent_notification.dismiss
  data:
    notification_id: "1234"
```

### {% linkable_title Create a persistent notification %}

Choose <img src='/images/screenshots/developer-tool-services-icon.png' alt='service developer tool icon' class="no-shadow" height="38" /> **Services** from the **Developer Tools** to call the `persistent_notification` service. Select `persistent_notification/create` from the list of **Available services:** and enter something like the sample below into the **Service Data** field and hit **CALL SERVICE**.

```json
{
  "notification_id": "1234",
  "title": "Sample notification",
  "message": "This is a sample text"
}
```
This will create the notification entry shown above.

NOTE: if you have defined a ```default_view:``` in your ```Groups:``` configuration you will need to include ```persistent_notification.<notification_id>``` e.g. ```persistent_notification.1234``` as per the example above, to your Groups configuration, in order to see the notification after creating it. 
