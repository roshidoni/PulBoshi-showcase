# PostHog post-wizard report

The wizard has completed a deep integration of your PulBoshi showcase project. PostHog is now configured to track key user engagement events across your Next.js application using the `instrumentation-client.ts` approach recommended for Next.js 15.3+. The integration captures user interactions with CTAs, demo video engagement, and 45-day plan page interactions to help you understand user behavior and conversion patterns.

## Integration Summary

The following files were modified or created:

| File | Changes |
|------|---------|
| `.env` | Updated with new PostHog API key and host |
| `instrumentation-client.ts` | Updated ui_host to use environment variable |
| `app/page.tsx` | Added PostHog event tracking for CTA buttons and demo video |
| `app/45-day-plan/page.tsx` | Added PostHog event tracking for page views, navigation, and week card interactions |

## Events Implemented

| Event Name | Description | File |
|------------|-------------|------|
| `clicked_why_pulboshi` | User clicked the 'Nega Pulboshi?' CTA button to learn more about the product | `app/page.tsx` |
| `clicked_45_day_plan` | User clicked the '45 kunlik reja' CTA button - indicates high intent interest | `app/page.tsx` |
| `watched_demo_video` | User interacted with the embedded YouTube demo video - strong engagement signal | `app/page.tsx` |
| `viewed_45_day_plan_page` | User viewed the 45-day financial development plan page | `app/45-day-plan/page.tsx` |
| `clicked_back_to_home` | User clicked 'Asosiy sahifaga qaytish' (back to home) from 45-day plan page | `app/45-day-plan/page.tsx` |
| `viewed_week_details` | User clicked on a specific week card on the 45-day plan | `app/45-day-plan/page.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

### Dashboard
- [Analytics basics](https://eu.posthog.com/project/111131/dashboard/469731) - Main dashboard for tracking core user engagement

### Insights
- [CTA Clicks - 45 Day Plan](https://eu.posthog.com/project/111131/insights/A5V4gZXS) - Tracks clicks on the 45-day plan CTA button
- [Demo Video Engagement](https://eu.posthog.com/project/111131/insights/n2aMBxwU) - Tracks user interactions with the YouTube demo video
- [Why PulBoshi Interest](https://eu.posthog.com/project/111131/insights/QxFwlyDY) - Tracks clicks on the 'Nega Pulboshi?' button
- [45-Day Plan Page Views](https://eu.posthog.com/project/111131/insights/vLlr2GDo) - Tracks users who viewed the 45-day financial plan page
- [Homepage to Plan Funnel](https://eu.posthog.com/project/111131/insights/NedK4Bpg) - Conversion funnel from homepage CTA click to viewing the 45-day plan page

## Configuration Details

- **PostHog Host**: https://eu.i.posthog.com (EU region)
- **Reverse Proxy**: Configured via Next.js rewrites in `next.config.ts`
- **Error Tracking**: Enabled via `capture_exceptions: true`
- **Debug Mode**: Enabled in development environment
