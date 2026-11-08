---
title: 'Throw away any AI feedback the model cannot quote'
summary: 'Why a plausible sounding comment is worse than no comment at all, and the substring check that stops a model inventing evidence about somebody''s writing.'
date: 2026-11-09
topics: ['AI agents', 'evaluation', 'product design']
---

In an AI tool that criticises a person's work, the failure mode that matters is not being wrong. It is being confidently, plausibly wrong about something that is not there. A learner cannot tell a real observation from a fluent invention, so one invented criticism poisons every correct one next to it.

I built a writing coach that had to avoid this, and the whole design came down to one rule: **every piece of feedback must quote text that literally exists in the submission.**

## The mechanism

The model is asked to produce feedback items that each carry a quote. The quote is supposed to be copied verbatim from the user's text. The server does not take that on trust. After the response comes back it re-checks every quote as a substring of the original submission, and silently discards any item whose quote cannot be found.

That single check changes the failure mode. An item cannot survive on plausibility. If the model wants to flag something, it has to point at it, and the pointer has to land.

```
model response
  -> schema validation (strict enums, length caps)
  -> quote re-check against the original user text
  -> discard every item whose quote is not a substring
  -> cap the survivors at five
  -> render
```

## Three things this forced

**Ranking instead of dumping.** Since the cap is five items, the model has to choose what matters most rather than list everything it noticed. A cap is an editorial constraint, and it improves the output.

**An honest empty state.** If nothing survives validation, the app says no significant issues were found. It does not manufacture a comment to fill the space. An empty result is a result.

**Style is not an error.** Objective rule violations, arguable style preferences, and open reasoning questions are separate categories, and a style only item is labelled as an optional suggestion rather than an error. Labelling taste as a fault is the same dishonesty as inventing a quote, just in a different register.

## What I explicitly did not build

No confidence percentages, because a number like 87% implies a measurement that does not exist. No fabricated rules or invented references. No IELTS band and no CEFR label, because the app has not been validated against human raters and issuing a formal level would be a claim about accuracy I cannot support. The app says that plainly in its own copy instead of hiding it.

## The limit, stated honestly

This makes the feedback grounded. It does not make it correct. A quote can be real and the judgement attached to it can still be wrong, and only independent human raters on a consented sample would answer that question. The substring check closes the failure mode I could close without lying about the one I could not.
