# Raman Spectroscopy – Experiment Guide

Welcome to the **Raman Spectroscopy Experiment**.  
This guide leads you through all stages of the experiment, from setup and safety to calibration, data acquisition, and quantitative analysis.

---

## 🎯 Learning Objectives

By the end of this lab, you will be able to:

- Explain the **Raman effect** and distinguish between Rayleigh, Stokes, and Anti-Stokes scattering  
- Calibrate a **USB2000+ spectrometer** using **Hg and Na spectral lamps**  
- Record and interpret Raman spectra of **ethanol–water mixtures**  
- Determine the **ethanol concentration** via Raman-peak intensities  
- Assess **sensitivity limits** and understand **sources of uncertainty**  
- Apply rigorous **laser safety** and scientific documentation standards  

---

## 🧠 Theoretical Background

Before entering the lab, review the following materials:

- [Theory of Raman Scattering](../03_Background/theory_raman_scattering.md)  
- [Spectrometer and Optical Components](../03_Background/instrumentation_spectrometer_pmt.md)  
- [Error Analysis and Peak Fitting](../03_Background/error_analysis_and_fitting.md)  
- [Laser Safety & Optical Alignment](../03_Background/alignment_and_safety.md)

If you are also working on the **Jod Spectroscopy** experiment, note the strong conceptual overlap — both share optical calibration, grating dispersion, and wavelength analysis techniques.

---

## ⚙️ Equipment Overview

| Category | Components |
|-----------|-------------|
| **Light Sources** | Na- and Hg-lamps (spectral calibration), Halogen lamp, White LED, He-Ne laser (633 nm), Green DPSS laser (532 nm) |
| **Spectrometer** | Ocean Optics USB2000+ Fiber-Optic Spectrometer |
| **Samples** | Water, Ethanol, various ethanol–water mixtures, and optionally Ouzo |
| **Optical Elements** | Lenses, mirrors, cuvette holder, polarization optics |
| **Reference Cell** | Jod-cell with temperature control |
| **Safety Devices** | Laser interlock system, beam stops, protective eyewear (532 nm / 633 nm) |

Detailed datasheets and manuals:  
[`../06_Literature/`](../06_Literature/)

---

## 🧩 Experiment Steps Overview

| Step | Topic | Description | Linked Notebook |
|------|-------|--------------|-----------------|
| [1](step1_setup_and_safety.md) | Setup & Safety | Laser safety, alignment, cooling, and PMT warm-up | – |
| [2](step2_calibration.md) | Spectrometer Calibration | Calibration using Hg/Na spectral lamps | [`calibration_hg_na.ipynb`](../02_Notebooks/calibration_hg_na.ipynb) |
| [3](step3_raman_measurement.md) | Raman Measurements | Recording spectra of ethanol–water mixtures | [`raman_spectra_analysis.ipynb`](../02_Notebooks/raman_spectra_analysis.ipynb) |
| [4](step4_quantitative_analysis.md) | Quantitative Analysis | Calibration curve, limit of detection, and uncertainty analysis | [`ethanol_concentration_fit.ipynb`](../02_Notebooks/ethanol_concentration_fit.ipynb) |

---

## ✅ Pre-Experiment Checklist

Complete the following before entering the lab:

- [ ] **Pre-lab questions** answered: [Questions Overview](../04_PreLab_Questions/questions_overview.md)  
- [ ] **Laser safety** reviewed and goggles checked (λ = 532 nm / 633 nm)  
- [ ] **Spectrometer software** (OceanView) installed and verified  
- [ ] **Hg/Na lamps** operational and fiber coupling aligned  
- [ ] **Cooling system** and **interlock** tested  
- [ ] **Sample solutions** (ethanol/water) prepared and labeled  
- [ ] **Lab notebook** ready for detailed notes  

---

## 💡 Tips & Resources

### Recommended Reading
- Demtröder, *Experimentalphysik III* (Springer)  
- Long, *The Raman Effect* (Wiley)  
- Herzberg, *Molecular Spectra and Structure*  
- Pappas et al., *Evaluation of a Raman spectroscopic method for the determination of alcohol content in Greek spirit Tsipouro* (2016)  

### Helpful Python Tutorials
- [Calibration Workflow](../02_Notebooks/calibration_hg_na.ipynb)  
- [Spectra Analysis & Peak Fitting](../02_Notebooks/raman_spectra_analysis.ipynb)  
- [Concentration Fit & Uncertainty](../02_Notebooks/ethanol_concentration_fit.ipynb)

### Data Examples
- [Calibration Data](../05_Data/calibration/)  
- [Ethanol Series Data](../05_Data/ethanol_water_series/)  
- [Example Ouzo Measurement](../05_Data/ouzo/)

---

## 🛡️ Safety Summary

> **Laser class 3B/4 – up to 500 mW visible radiation**  
> Operate only with closed covers and interlock active.  
> Never look into the beam or reflections.  
> Always wear protective eyewear appropriate to your laser wavelength.  

**Before proceeding to Step 1**, ensure:  
- [ ] Laser interlock confirmed active  
- [ ] Beam path enclosed or terminated  
- [ ] All reflective items removed from the optical table  
- [ ] Fire extinguisher and emergency stop accessible  

---

## 🗺️ Navigation

➡ Proceed to [Step 1 – Setup and Safety](step1_setup_and_safety.md)  
⬅ Return to [Project Overview](../index.md)
