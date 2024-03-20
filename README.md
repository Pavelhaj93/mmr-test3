# Project Documentation

## Overview

This project leverages the combination of [Next.js](https://nextjs.org/) (v14), [Tailwind CSS](https://tailwindcss.com/) (v3.4), and the [GOV Design System](https://designsystem.gov.cz/) (v4) for pre-designed components and styles tailored for government websites. Our aim is to create a highly efficient, stylistically consistent, and accessible web application.

## Design System Usage

The GOV Design System provides a foundation of styles and components, making it the primary resource for building the app. It is highly encouraged to utilize the system's components, colors, typography, icons, and more to maintain design consistency. If a required component is missing, you are advised to create custom components using the design system as a base, supplemented with Tailwind CSS for additional styling needs.

## Resources

- GOV Design System Storybook: Visit [GOV design system Storybook](https://designsystem.gov.cz/storybook) for API documentation of components. Note that this documentation does not cover all available components, a few of them are missing there.
- GOV Design System Repository: For a comprehensive understanding of components and their properties, inspect the [GOV Design System GitLab Repository](https://code.gov.cz/gov-cz/gov-design-system). Key files include [components.d.ts](https://code.gov.cz/gov-cz/gov-design-system/-/blob/master/packages/core/src/components.d.ts?ref_type=heads) file and [components](https://code.gov.cz/gov-cz/gov-design-system/-/tree/master/packages/core/src/components) folder for component props and the source code.
- Design Inspiration: Explore https://gov.cz/ (with the older version of the design system) and https://obcan.portal.gov.cz/ for implementation examples of the GOV Design System.

## Figma Designs

The project's wireframes are available on Figma at [MMR - Stavební správa](https://www.figma.com/file/ugvIvufUiFjGdDrq3nOZHb/MMR---Stavebn%C3%AD-spr%C3%A1va---WF?type=design&node-id=0-1&mode=design&t=S6QeeNjbsZiKjkUF-0). Note that UI designs are not included and the front end is responsible for coding the UI based on the other government websites.

## Components List

The GOV Design System offers a wide array of exported React components for use in your project. Below is a categorized list detailing these components:

### General Components

- Accordions: `GovAccordion`, `GovAccordionItem`
- Application Shell: `GovApp`
- Attachments: `GovAttachments`, `GovAttachmentsItem`
- Navigation: `GovNav`, `GovNavItem`, `GovSideNav`, `GovSideNavItem`
- Layout: `GovLayout`, `GovLayoutColumn`, `GovContainer`
- Messages and Modals: `GovMessage`, `GovModal`, `GovToast`
- Data Display: `GovCard`, `GovChip`, `GovStatsbar`, `GovStatsbarItem`, `GovTag`, `GovTiles`, `GovTile`

### Form Components

- Autocomplete: `GovFormAutocomplete`
- Checkboxes and Radios: `GovFormCheckbox`, `GovFormRadio`
- Input Fields: `GovFormInput`, `GovFormSearch`, `GovFormSelect`, `GovFormMultiSelect`, `GovFormPasswordPower`, `GovFormFile`
- Labels and Messages: `GovFormLabel`, `GovFormMessage`
- Containers: `GovFormGroup`, `GovControlGroup`

### Utility Components

- Loaders and Feedback: `GovLoading`, `GovSkeleton`, `GovTooltip`, `GovTooltipContent`
- Navigation and Steps: `GovTabs`, `GovTabsItem`, `GovStepper`, `GovStepperItem`
- Miscellaneous: `GovBackdrop`, `GovBreadcrumb`, `GovButton`, `GovCookiebar`, `GovDropdown`, `GovEmpty`, - `GovErrorCode`, `GovGrid`, `GovGridItem`, `GovIcon`, `GovInfobar`, `GovPagination`, `GovPrompt`, `GovSpacer`, - `GovWizard`, `GovWizardItem`

## Base Styles List

The GOV Design System offers also CSS utility classes that should be prioritized over Tailwind to keep the consistency and utilize the most from the design system:

### Colors

A list of all available color classes.

- `.gov-bg--primary-100`
- `.gov-bg--primary-200`
- `.gov-bg--primary-300`
- `.gov-bg--primary-400`
- `.gov-bg--primary-500`
- `.gov-bg--primary-600`
- `.gov-bg--primary-700`
- `.gov-bg--primary-800`
- `.gov-bg--primary-900`
- `.gov-bg--secondary-100`
- `.gov-bg--secondary-200`
- `.gov-bg--secondary-300`
- `.gov-bg--secondary-400`
- `.gov-bg--secondary-500`
- `.gov-bg--secondary-600`
- `.gov-bg--secondary-700`
- `.gov-bg--secondary-800`
- `.gov-bg--secondary-900`
- `.gov-bg--success-100`
- `.gov-bg--success-200`
- `.gov-bg--success-300`
- `.gov-bg--success-400`
- `.gov-bg--success-500`
- `.gov-bg--success-600`
- `.gov-bg--success-700`
- `.gov-bg--warning-100`
- `.gov-bg--warning-200`
- `.gov-bg--warning-300`
- `.gov-bg--warning-400`
- `.gov-bg--warning-500`
- `.gov-bg--warning-600`
- `.gov-bg--warning-700`
- `.gov-bg--error-100`
- `.gov-bg--error-200`
- `.gov-bg--error-300`
- `.gov-bg--error-400`
- `.gov-bg--error-500`
- `.gov-bg--error-600`
- `.gov-bg--focus-base`
- `.gov-bg--neutral-black`
- `.gov-bg--neutral-white`
- `.gov-color--primary-100`
- `.gov-color--primary-200`
- `.gov-color--primary-300`
- `.gov-color--primary-400`
- `.gov-color--primary-500`
- `.gov-color--primary-600`
- `.gov-color--primary-700`
- `.gov-color--primary-800`
- `.gov-color--primary-900`
- `.gov-color--secondary-100`
- `.gov-color--secondary-200`
- `.gov-color--secondary-300`
- `.gov-color--secondary-400`
- `.gov-color--secondary-500`
- `.gov-color--secondary-600`
- `.gov-color--secondary-700`
- `.gov-color--secondary-800`
- `.gov-color--secondary-900`
- `.gov-color--success-100`
- `.gov-color--success-200`
- `.gov-color--success-300`
- `.gov-color--success-400`
- `.gov-color--success-500`
- `.gov-color--success-600`
- `.gov-color--success-700`
- `.gov-color--warning-100`
- `.gov-color--warning-200`
- `.gov-color--warning-300`
- `.gov-color--warning-400`
- `.gov-color--warning-500`
- `.gov-color--warning-600`
- `.gov-color--warning-700`
- `.gov-color--error-100`
- `.gov-color--error-200`
- `.gov-color--error-300`
- `.gov-color--error-400`
- `.gov-color--error-500`
- `.gov-color--error-600`
- `.gov-color--focus-base`
- `.gov-color--neutral-black`
- `.gov-color--neutral-white`

### Typography

A list of all available typography classes.

- `.h1`
- `.h2`
- `.h3`
- `.h4`
- `.h5`
- `.h6`
- `.gov-text--xs`
- `.gov-text--s`
- `.gov-text--m`
- `.gov-text--l`
- `.gov-text--xl`
- `.gov-text--2xl`
- `.gov-text--3xl`
- `.gov-text--4xl`
- `.gov-text--5xl`
- `.gov-text--6xl`

### Lists

A list of all available list classes.

- `.gov-list`
- `.gov-list--plain`
- `.gov-list\*\*item`
- `.gov-list--inline`
- `.gov-ordered-list`
- `.gov-ordered-list\*\*item`

### Box Shadows

A list of all available box shadow classes.

- `.gov-box-shadow--unset`
- `.gov-box-shadow--s`
- `.gov-box-shadow--m`
- `.gov-box-shadow--l`
- `.gov-box-shadow--xl`

### Content

Apply the `.gov-content` class on wrapper in all content pages. It applies spacing to typography elements inside.

### Misc

A list of all miscellaneous classes.

- `.gov-hide`
- `.gov-hide--sm`
- `.gov-hide--md`
- `.gov-hide--lg`
- `.gov-hide--xl`

### Other Classes

There are a few more classes available in the GOV design system CSS but you will mostly not use them as they come with the components, or we were not able to find out how to use them in project, such as:

- `.gov-link`
- `.gov-link--external`
- `.gov-link--external-unset`
- `.gov-link--icon-unset`
