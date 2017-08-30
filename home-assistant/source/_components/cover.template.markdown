---
layout: page
title: "Template Cover"
description: "Instructions how to integrate Template covers into Home Assistant."
date: 2017-06-19 20:32
sidebar: true
comments: false
sharing: true
footer: true
ha_category: Cover
ha_release: 0.48
ha_iot_class: "Local Push"
logo: home-assistant.png
---

The `template` platform can create covers that combine components and provides the ability to run scripts or invoke services for each of the open, close, stop, position, and tilt commands of a cover.

To enable Template covers in your installation, add the following to your `configuration.yaml` file:

```yaml
# Example configuration.yaml entry
cover:
  - platform: template
    covers:
      garage_door:
        friendly_name: "Garage Door"
        value_template: "{% raw %}{{is_state('sensor.garage_door > 0'}}{% endraw %}"
        open_cover:
          service: script.open_garage_door
        close_cover:
          service: script.close_garage_door
        stop_cover:
          service: script.stop_garage_door
```

Configuration variables:

- **covers** array (*Required*): List of your coverss.
  - **open_cover** (*Optional*): Defines an [action](/getting-started/automation/) to run when the cover is opened.  If `open_cover` is specified, `close_cover` must also be specified.  At least one of `open_cover` and `set_cover_position` must be specified.
  - **close_cover** (*Optional*): Defines an [action](/getting-started/automation/) to run when the cover is closed.
  - **stop_cover** (*Optional*): Defines an [action](/getting-started/automation/) to run when the cover is stopped.
  - **set_cover_position** (*Optional*): Defines an [action](/getting-started/automation/) to run when the cover is set to a specific value (between 0 and 100).
  - **set_cover_tilt_position** (*Optional*): Defines an [action](/getting-started/automation/) to run when the cover tilt is set to a specific value (between 0 and 100).
  - **value_template** (*Optional*): Defines a [template](/topics/templating/) to get the state of the cover. Valid values are open/true or closed/false. `value_template` and `position_template` cannot be specified concurrently.
  - **position_template** (*Optional*): Defines a [template](/topics/templating/) to get the state of the cover. Legal values are numbers between 0 (closed) and 100 (open). `value_template` and `position_template` cannot be specified concurrently.
  - **tilt_template** (*Optional*): Defines a [template](/topics/templating/) to get the tilt state of the cover. Legal values are numbers between 0 (closed) and 100 (open).
  - **optimistic** (*Optional*): Force cover position to use optimistic mode.  Value is either `true` or `false`.  [See below](#optimistic-mode) for more details.
  - **tilt_optimistic** (*Optional*): Force cover tilt position to use optimistic mode.  Value is either `true` or `false`.  [See below](#optimistic mode) for more details.
  - **icon_template** (*Optional*): Defines a [template](/topics/templating/) to specify which icon to use. Either `value_template` or `position_template` must be specified.
  - **friendly_name** (*Optional*): Name to use in the frontend.
  - **entity_id** (*Optional*): Add a list of entity IDs so the switch only reacts to state changes of these entities. This will reduce the number of times the cover will try to update it's state.

## {% linkable_title Optitmistic Mode %}

In optmistic mode, the cover position state is maintained internally.  This mode is automatically enabled if neither `value_template` or `position_template` are sepcified.  Note that this is unlikely to be very reliable without some feedback mechanism, since there is otherwise no way to know if the cover is moving properly.  The cover can be forced into optimistic mode by using the `optimistic` attribute.  There is an equivalent mode for tilt-position that is enabled when `tilt_template` is not specified or when the `tilt-optimistic` attribute is used.

## {% linkable_title Examples %}

In this section you will find some real life examples of how to use this cover.

### {% linkable_title Garage Door %}

This example converts a garage door with a controllable switch and position sensor into a cover.

```yaml
cover:
  - platform: template
    covers:
      garage_door:
        friendly_name: 'Garage Door'
        value_template: "{% raw %}{{ sensor.garage_door }}{% endraw %}"
        open_cover:
          service: switch.turn_on
          entity_id: switch.garage_door
        close_cover:
          service: switch.turn_off
          entity_id: switch.garage_door
        stop_cover:
          service: switch.turn_on
          entity_id: switch.garage_door
        icon_template: "{% raw %}{% if not is_state('sensor.garage_door', 'on') %}mdi:garage-open{% else %}mdi:garage{% endif %}{% endraw %}"

```
