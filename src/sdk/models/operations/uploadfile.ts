/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class UploadFileRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/octet-stream" })
    requestBody?: Uint8Array;

    /**
     * ID of pet to update
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=petId" })
    petId: number;
}

export class UploadFileResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    @SpeakeasyMetadata()
    apiResponse?: shared.ApiResponse;

    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
