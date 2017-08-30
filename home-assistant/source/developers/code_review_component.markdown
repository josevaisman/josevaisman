---
layout: page
title: "Checklist for creating a component"
description: "A list of things to pay attention to when code reviewing a component."
date: 2017-01-15 14:09 -0800
sidebar: true
comments: false
sharing: true
footer: true
---

A checklist of things to do when you're adding a new component.

<p class='note'>
Not all existing platforms follow the requirements in this checklist. This cannot be used as a reason to not follow them!
</p>

### {% linkable_title Requirements %}

 1. Requirement version pinned: `REQUIREMENTS = ['phue==0.8.1']`
 2. We no longer want requirements hosted on GitHub. Please upload to PyPi.
 3. Requirements should only be imported inside functions. This is necessary because requirements are installed on the fly.

### {% linkable_title Configuration %}

 1. Voluptuous schema present for config validation
 2. Default parameters specified in voluptuous schema, not in `setup(…)`
 3. Schema using as many generic config keys as possible from `homeassistant.const`
 4. If having platforms, have a `PLATFORM_SCHEMA`, otherwise `CONFIG_SCHEMA`.
 5. If `PLATFORM_SCHEMA`, import base from `homeassistant.helpers.config_validation`

### {% linkable_title Component/platform communication %}

 1. If you need to share global data with platforms, use the dictionary `hass.data`. `hass.data[DATA_XY]` while `XY` is the component is preferred over `hass.data[DOMAIN]`.
 2. If the component fetches data that causes it's related platform entities to update, you can notify them using the dispatcher code in `homeassistant.helpers.dispatcher`.
