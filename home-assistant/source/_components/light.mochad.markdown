---
layout: page
title: "Mochad Light"
description: "Instructions how to integrate X10 Mochad switches into Home Assistant."
date: 2017-07-14 11:29
sidebar: true
comments: false
sharing: true
footer: true
ha_category: Light
ha_release: 0.51
---

The `mochad` switch platform lets you control an X10 enabled dimmer/light
device.

To enable this sensor, you first have to set up the [mochad component](/components/mochad/) and then add the following to your `configuration.yaml` file:

```yaml
# Example configuration.yml entry
light:
  - platform: mochad
    devices:
      - address: a1
      - address: a5
```

Configuration variables:

- **address** (*Required*): The X10 address of the light.
- **name** (*Optional*): The name of the switch. Default is: x10_light_dev_*address*.
- **comm_type** (*Optional*): pl (powerline) or rf (radio frequency). Default is pl.
