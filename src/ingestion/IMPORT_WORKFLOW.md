# SarkarSaathi Data Import & Staging Workflow Guide

This document outlines the existing manual import, validation, deduplication, provenance capture, and review lifecycle for importing records into SarkarSaathi.

## 1. Supported Entities
The manual ingestion pipeline supports three entity types:
- **Opportunities**
- **Tenders**
- **News**

## 2. Required Fields
All imported records must include:
- `id`: Unique identifier (e.g., `SAMPLE-OPP-2026-001`)
- `title`: Primary heading or title of the item
- `category`: Classification category
- `slug`: URL-friendly identifier
- `sourceUrl`: Valid HTTPS URL pointing to the official source
- `sourceAuthority`: Issuing organization or government body
- `verificationStatus`: Must be initialized to `NEEDS_REVIEW`

## 3. Sample Template File Locations
Pre-configured sample templates are located in `/src/ingestion/`:
- Opportunities: `/src/ingestion/sample_opportunity_template.json`
- Tenders: `/src/ingestion/sample_tender_template.json`
- News: `/src/ingestion/sample_news_template.json`

## 4. How Validation Works
The validation engine checks that:
- Required schema fields are present and correctly typed.
- Official source URLs use valid domains and protocol (`https://`).
- No critical attributes are missing before staging.

## 5. Duplicate Detection
The deduplication service checks existing repository IDs and slugs to prevent duplicate record insertion.

## 6. Provenance & Source Capture
Provenance fields (`sourceUrl`, `sourceAuthority`, `acquisitionMethod: "MANUAL_IMPORT"`) are captured and attached to every record to ensure auditability and transparency.

## 7. Approval & Rejection Rules
- All newly imported records enter the queue as `NEEDS_REVIEW` (staged).
- Records must pass schema checks before an administrator can approve them.
- Rejected records require a reason and are kept out of production.
- Duplicate approvals are prevented.

## 8. Auto-Publish Policy
**Auto-publish is strictly OFF by default.** Staged records can only be published to production after explicit manual administrator approval.
