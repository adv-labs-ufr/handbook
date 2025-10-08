# Advanced Lab Handbook

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/UniFreiburg-Physics/advanced-lab-handbook/main?labpath=tutorials%2Fgaussian_fit.ipynb)

The Advanced Lab Handbook provides openly accessible learning materials for the Advanced Laboratory Classes (FP-I, FP-II, FP-EDU) at the Physikalisches Institut, Universität Freiburg. This repository hosts a Jupyter Book that consolidates safety information, experiment documentation, and reproducible data-analysis tutorials. While the handbook delivers context, data, and worked examples, ILIAS remains the authoritative platform for schedules, quizzes, and grading.

## Repository goals

- Maintain a single source of truth for laboratory instructions and analysis workflows.
- Offer executable notebooks through Binder for rapid prototyping and classroom demonstrations.
- Encourage contributions from instructors, tutors, and students via transparent version control.

## Getting started

1. **Clone the repository**
   ```bash
   git clone https://github.com/UniFreiburg-Physics/advanced-lab-handbook.git
   cd advanced-lab-handbook
   ```
2. **Create a virtual environment (optional but recommended)**
   ```bash
   python -m venv .venv
   source .venv/bin/activate
   pip install -r binder/requirements.txt
   ```
3. **Build the Jupyter Book locally**
   ```bash
   jupyter-book build .
   ```
   The rendered HTML will be available under `_build/html`. Open `index.html` in your browser to preview the site.

## Repository structure

```
advanced-lab-handbook/
├── _config.yml              # Global Jupyter Book configuration
├── _toc.yml                 # Table of contents defining the book structure
├── general-guidelines/      # Shared lab policies and preparation resources
├── experiments/raman/       # Example experiment folder (Raman spectroscopy)
├── tutorials/               # Interactive notebooks and analysis walkthroughs
├── binder/                  # Binder configuration (requirements + postBuild)
└── .github/workflows/       # Continuous integration for automated book builds
```

Additional experiment modules can be added under `experiments/`, and further tutorials can be contributed to `tutorials/`.

## Continuous integration & deployment

GitHub Actions automatically builds the Jupyter Book on every push to the `main` branch. Successful builds are published to GitHub Pages, ensuring that the online handbook stays in sync with the repository. The workflow installs dependencies from `binder/requirements.txt` and runs `jupyter-book build .` to verify the site.

## Using Binder

Click the Binder badge at the top of this README or open the [Gaussian fit tutorial on Binder](https://mybinder.org/v2/gh/UniFreiburg-Physics/advanced-lab-handbook/main?labpath=tutorials%2Fgaussian_fit.ipynb) directly. Binder launches an ephemeral environment with JupyterLab, preconfigured packages (NumPy, SciPy, Matplotlib, Pandas, Jupyter Book), and a post-build message confirming readiness.

## Contributing

1. Fork the repository and create a feature branch.
2. Add or update content within the appropriate section (e.g., `general-guidelines/`, `experiments/`, `tutorials/`).
3. Run `jupyter-book build .` to ensure the site compiles without warnings or errors.
4. Open a pull request describing your changes. Remember to include data files or notebooks necessary to reproduce results.

## License

- **Text and figures**: Licensed under [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/).
- **Code examples and scripts**: Licensed under the [MIT License](./LICENSE).

By contributing, you agree that your submissions will be distributed under these terms.
