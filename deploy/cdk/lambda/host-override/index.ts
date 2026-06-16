import type {
  CloudFrontRequestEvent,
  CloudFrontRequestResult,
} from 'aws-lambda';

// GitHub Pages serves developer.vertex3d.com regardless of which CloudFront
// domain the user is accessing (test or prod). CloudFront restricts Host in
// origin custom headers; this origin-request Lambda is the only supported way
// to override it.
const GITHUB_PAGES_HOST = 'developer.vertex3d.com';

export const handler = async (
  event: CloudFrontRequestEvent
): Promise<CloudFrontRequestResult> => {
  const request = event.Records[0].cf.request;
  request.headers['host'] = [{ key: 'Host', value: GITHUB_PAGES_HOST }];
  return request;
};
