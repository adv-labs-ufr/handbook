# Raman Spectroscopy – Advanced Physics Laboratory (FP1)

Welcome to the **Raman Spectroscopy Experiment**  
This section of the FP1 practical course contains all materials, documentation, and code for the Raman spectroscopy lab at the University of Freiburg.

---

## 🔬 Overview

The Raman experiment investigates **molecular vibrations** via **inelastic light scattering**.  
Students use lasers, spectrometers, and data analysis tools to:

- Understand Raman, Rayleigh, and Stokes/Anti-Stokes processes  
- Calibrate a USB2000+ spectrometer using Hg and Na lamps  
- Record Raman spectra of ethanol–water mixtures  
- Quantitatively determine ethanol concentration  
- Evaluate detection limits and measurement uncertainties

---

## 🧩 Repository Structure

| Folder | Description |
|--------|--------------|
| [`01_Experiment_Guide/`](01_Experiment_Guide/index.md) | Full experiment guide (setup → calibration → analysis) |
| [`02_Notebooks/`](02_Notebooks/) | Python notebooks for calibration and data analysis |
| [`03_Background/`](03_Background/) | Theory, instrumentation, and fitting/error analysis |
| [`05_Data/`](05_Data/) | Example calibration and Raman spectra |
| [`06_Literature/`](06_Literature/) | Device manuals and reference documents |
| [`07_Report_Template/`](07_Report_Template/) | IMRaD-style report template and bibliography |

---

## ⚙️ Getting Started

To start the Raman experiment, open the experiment guide here:  
👉 [Open Experiment Guide](01_Experiment_Guide/index.md)

---

## 🧮 Software Requirements

To run the analysis notebooks locally:

```bash
pip install numpy matplotlib scipy pandas lmfit
```

Or use Binder for cloud execution:  
[![Open in Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/YOUR_USERNAME/experiments/fp1/raman/main)

---

*Maintained by the AMO Physics Group – University of Freiburg*  
*Repository curated by Lucas Eisenhart*
