---
title: How to contribute
---

# How to contribute

OpenNerve will gladly accepts contributions across hardware, firmware, software, and documentation.

### Hardware
For hardware contributions, we strive to follow [OSHWA's Best Practices for Open Source Hardware](https://oshwa.org/resources/sharing-best-practices/), which include releasing original design files, a Bill of Materials, Instructions and other documentation, and photos of finished products. 

- **CAD / Mechanical Designs**: please include the source files as well as a description of what was actually built and tested, materials used, test process and results. In general, OpenNerve will not accept changes or updates to our enclosures or 3D files without proof that devices have been fabricated. However, that doesn’t mean you shouldn’t interact with the project if you see a needed improvement or bug in a CAD model! If you do see an issue, please submit a GitHub Issue on the corresponding repo. If you do fix it in CAD but do not have the capability to build and test, go ahead and submit a pull request tagging the Issue. You can start a Discussion to find other community members with resources to build and test your fix.
- **Printed Circuit Boards**: Please document the nature of the problem you observed (including data showing the effects of the bug), the changes made, and the tests you performed to verify that the changes were successful at fixing the bug and not affecting other functions. For the IPG / Gen2 PCBA, a test plan is provided that must be passed before any PCB changes are merged. If you do manufacture and test PCBs please include the manufacturer and layer stackup. Make sure the BOM is updated. Just like for CAD, feel free to open an “Issue” if you do encounter an error or see a bug in a PCB, and feel free to push a fix without testing along with a comment to maintainers so that we can help direct it to someone who can test and confirm the change. Feel free to start a Discussion around it as well.
- **Documentation**: Documentation on this website [OpenNerve.org](http://OpenNerve.org) can be edited through GitHub's standard process. Most pages are hosted in the repo for the device they reference; please edit the original document, as it will then be mirrored to the website's repo.
- **Questions or proposals that aren't yet a PR**: chat with our
  [Community](../community/index.md) to get answers and find collaborators / helpers for design, testing, or debugging.

## How to add a new or significantly updated device
Are you developing a new lead, PCBA, sensor, or test fixture to use with OpenNerve components? Or are you adding new features to an OpenNerve component to the point where it is basically a new device entirely? We'd love to host your work in our repository.

New device could include new sensors or I2C devices that connect by leads to OpenNerve's IPG, test structures for mechanically or electrically testing an OpenNerve component, or anything else that interacts with or is used by OpenNerve users. If you are developing an OpenNerve-compatible device and would like to host it under the OpenNerve organization, please [Start a discussion](https://github.com/CARSSCenter/OpenNerve-Community/discussions) or reach out to the team at Open.Nerve@usc.edu. and we'll work together to set up the infrastructure necessary.

A significant modification that would warrant a new repository could include, for example, an IPG variant that uses an Intan chip for neural recording, or a variant that is optimized for optogenetic stimulation rather than eletrical stimulation. If you have forked an OpenNerve repository and the changes are significant enough to merit its own repo, let us know and we'll work together to mirror the fork and set up maintainer access.

