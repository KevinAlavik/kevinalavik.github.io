---
title: "Why UEFI is Bloat and Computers Belong in the 90s"
date: 2025-03-10T20:02:00+01:00
author: "Kevin Alavik"
---

## Why UEFI is Bloat and Computers Belong in the 90s

Remember when computers just worked? You'd hit the power button, hear a satisfying beep, and be greeted by a simple blue screen with white text. No bloated firmware, no cryptic secure boot errors — just your trusty BIOS doing its job like a champion. 

Then along came UEFI, bringing with it a mountain of complexity nobody asked for.

### The Case Against UEFI

1. **Unnecessary Complexity**  
   BIOS was simple and direct. A few basic settings, straightforward boot options, and no complicated layers of abstraction. In contrast, UEFI introduces an entirely new layer of complexity. The UEFI firmware can run a full operating system, often requiring separate partitions and tools to configure. This creates an unnecessarily complicated system, both for developers and end-users.

2. **Bloated Features Nobody Needs**  
   BIOS had a laser focus on one thing: booting your system. It didn’t try to do everything, nor did it include features that were irrelevant for a basic PC user. UEFI, on the other hand, integrates network stacks, high-level drivers, graphical user interfaces (GUIs), and support for drives that exceed 2TB, even though many users still have smaller drives. These features are not only unnecessary but come at the cost of stability and security. With UEFI, there’s a lot more attack surface for vulnerabilities that didn’t exist in the lean and focused BIOS.

3. **Secure Boot — But for Whom?**  
   Secure Boot is a feature introduced by UEFI to ensure only signed and trusted software runs on your system. Sounds good, right? But in practice, Secure Boot locks users into a walled garden, preventing them from running their own operating systems, modifying bootloaders, or even installing some Linux distributions. This unnecessary restriction undermines the very nature of personal computing, which should be about freedom and control. The days of tinkering with your system’s startup process are gone, as UEFI’s Secure Boot prioritizes security over user customization.

4. **BIOS Had Soul**  
   The BIOS interface wasn’t pretty, but it was functional. You had simple menus to tweak the most important settings: boot order, CPU settings, RAM configuration. The interface was intuitive, and you could easily navigate through it with the keyboard. Contrast this with UEFI’s often bloated GUI that complicates things with mouse support and extra options. In BIOS, you knew exactly where to go, and it didn’t take up more resources than necessary.

5. **Boot Speed and Minimalism**  
   UEFI has far more layers to go through before it finally hands control over to your bootloader. BIOS, by comparison, is direct — it doesn't waste time trying to initialize a network stack or load extra drivers before it passes control. BIOS could boot in seconds because it did the bare minimum to get the system running. With UEFI, this simplicity is lost in a sea of unnecessary features that slow down the process.

6. **Compatibility and Support**  
   BIOS has been around for decades, which means it’s compatible with nearly every system you can imagine. UEFI, on the other hand, can be cumbersome when dealing with older hardware. Legacy support for non-UEFI systems is often shaky at best, requiring complicated workarounds just to get things running. Moreover, when it comes to embedded systems, industrial PCs, or simple devices, BIOS still reigns as the more stable and easy-to-integrate choice.

### Bring Back BIOS  
UEFI may have won the war, but it doesn't have to win our hearts. Let’s build systems that respect the simplicity of the past. Where a PC boots like a real PC — not a smartphone pretending to be a server.  

BIOS forever.
