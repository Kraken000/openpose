var searchData=
[
  ['dataformattostring',['dataFormatToString',['../namespaceop.html#a9d121f33179e41075f4602eb6527e658',1,'op']]],
  ['datum',['Datum',['../structop_1_1_datum.html#a72c75834671aebe44705738fb5efc3c5',1,'op::Datum::Datum()'],['../structop_1_1_datum.html#a42f9aef848c6335c5a81cad374319f0b',1,'op::Datum::Datum(const Datum &amp;datum)'],['../structop_1_1_datum.html#a2d4940d8cb12d95b8588cd0280f6524c',1,'op::Datum::Datum(Datum &amp;&amp;datum)']]],
  ['datumproducer',['DatumProducer',['../classop_1_1_datum_producer.html#a627c16307864f02251eeb77f2320052f',1,'op::DatumProducer']]],
  ['deallocate',['deallocate',['../classcl_1_1_s_v_m_allocator.html#a695f4693c4245c66285e7f4a0405cf84',1,'cl::SVMAllocator']]],
  ['define_5fbool',['DEFINE_bool',['../flags_8hpp.html#a0e9cb0627d386e4d69e5eae0593d70ad',1,'DEFINE_bool(disable_multi_thread, false,&quot;It would slightly reduce the frame rate in order to highly reduce the lag. Mainly useful&quot;&quot; for 1) Cases where it is needed a low latency (e.g. webcam in real-time scenarios with&quot;&quot; low-range GPU devices); and 2) Debugging OpenPose when it is crashing to locate the&quot;&quot; error.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#a7fc3e871114ac35447499ffda035d51e',1,'DEFINE_bool(flir_camera, false,&quot;Whether to use FLIR (Point-Grey) stereo camera.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#a64c46584d79ef0b947ecd0a98b282839',1,'DEFINE_bool(frame_flip, false,&quot;Flip/mirror each frame (e.g. for real time webcam demonstrations).&quot;):&#160;flags.hpp'],['../flags_8hpp.html#a6a501f229de1ba19801b77fd0565527b',1,'DEFINE_bool(frames_repeat, false,&quot;Repeat frames when finished.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#a5c66f20b5a9a1bc44d3c685fd37ff7f9',1,'DEFINE_bool(process_real_time, false,&quot;Enable to keep the original source frame rate (e.g. for video). If the processing time is&quot;&quot; too long, it will skip frames. If it is too fast, it will slow it down.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#ad739178d4295e31edd2f1e468bd2e600',1,'DEFINE_bool(frame_keep_distortion, false,&quot;If false (default), it will undistortionate the image based on the&quot;&quot; `camera_parameter_folder` camera parameters; if true, it will not undistortionate, i.e.,&quot;&quot; it will leave it as it is.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#a5e8200fc5fd8bc1e80b94b029ea8e18d',1,'DEFINE_bool(body_disable, false,&quot;Disable body keypoint detection. Option only possible for faster (but less accurate) face&quot;&quot; keypoint detection.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#a669c6f4820af0275f40808b18147b98c',1,'DEFINE_bool(heatmaps_add_parts, false,&quot;If true, it will fill op::Datum::poseHeatMaps array with the body part heatmaps, and&quot;&quot; analogously face &amp; hand heatmaps to op::Datum::faceHeatMaps &amp; op::Datum::handHeatMaps.&quot;&quot; If more than one `add_heatmaps_X` flag is enabled, it will place then in sequential&quot;&quot; memory order: body parts + bkg + PAFs. It will follow the order on&quot;&quot; POSE_BODY_PART_MAPPING in `src/openpose/pose/poseParameters.cpp`. Program speed will&quot;&quot; considerably decrease. Not required for OpenPose, enable it only if you intend to&quot;&quot; explicitly use this information later.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#af57ca90aafa15b707af299527b0aff6f',1,'DEFINE_bool(heatmaps_add_bkg, false,&quot;Same functionality as `add_heatmaps_parts`, but adding the heatmap corresponding to&quot;&quot; background.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#ac881df85c5be736d05822ad98ac0496f',1,'DEFINE_bool(heatmaps_add_PAFs, false,&quot;Same functionality as `add_heatmaps_parts`, but adding the PAFs.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#aa941a6193b13f3d138437cf2a84e73ff',1,'DEFINE_bool(part_candidates, false,&quot;Also enable `write_json` in order to save this information. If true, it will fill the&quot;&quot; op::Datum::poseCandidates array with the body part candidates. Candidates refer to all&quot;&quot; the detected body parts, before being assembled into people. Note that the number of&quot;&quot; candidates is equal or higher than the number of final body parts (i.e. after being&quot;&quot; assembled into people). The empty body parts are filled with 0s. Program speed will&quot;&quot; slightly decrease. Not required for OpenPose, enable it only if you intend to explicitly&quot;&quot; use this information.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#aea11a0489c2af278990d3ddff10960fd',1,'DEFINE_bool(face, false,&quot;Enables face keypoint detection. It will share some parameters from the body pose, e.g.&quot;&quot; `model_folder`. Note that this will considerable slow down the performance and increse&quot;&quot; the required GPU memory. In addition, the greater number of people on the image, the&quot;&quot; slower OpenPose will be.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#a4da8f1bc0afb58f2a757ab6d90c6042e',1,'DEFINE_bool(hand, false,&quot;Enables hand keypoint detection. It will share some parameters from the body pose, e.g.&quot;&quot; `model_folder`. Analogously to `--face`, it will also slow down the performance, increase&quot;&quot; the required GPU memory and its speed depends on the number of people.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#a0a28dd6ee5503f070d08cc9e4a3aff05',1,'DEFINE_bool(hand_tracking, false,&quot;Adding hand tracking might improve hand keypoints detection for webcam (if the frame rate&quot;&quot; is high enough, i.e. &gt;7 FPS per GPU) and video. This is not person ID tracking, it&quot;&quot; simply looks for hands in positions at which hands were located in previous frames, but&quot;&quot; it does not guarantee the same person ID among frames.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#a4c800b6a91b02874d006da33ab8432cd',1,'DEFINE_bool(3d, false,&quot;Running OpenPose 3-D reconstruction demo: 1) Reading from a stereo camera system.&quot;&quot; 2) Performing 3-D reconstruction from the multiple views. 3) Displaying 3-D reconstruction&quot;&quot; results. Note that it will only display 1 person. If multiple people is present, it will&quot;&quot; fail.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#ac210b56a3c46ff06143a62b0bb725cc6',1,'DEFINE_bool(identification, false,&quot;Experimental, not available yet. Whether to enable people identification across frames.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#a1a9ffc302eac69c8ba024da3edf01a5f',1,'DEFINE_bool(disable_blending, false,&quot;If enabled, it will render the results (keypoint skeletons or heatmaps) on a black&quot;&quot; background, instead of being rendered into the original image. Related: `part_to_show`,&quot;&quot; `alpha_pose`, and `alpha_pose`.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#a231bec7b2113f31cebb760c849ca2841',1,'DEFINE_bool(fullscreen, false,&quot;Run in full-screen mode (press f during runtime to toggle).&quot;):&#160;flags.hpp'],['../flags_8hpp.html#a14f23a4c6dd6c9290e3ee44bd79f96bf',1,'DEFINE_bool(no_gui_verbose, false,&quot;Do not write text on output images on GUI (e.g. number of current frame and people). It&quot;&quot; does not affect the pose rendering.&quot;):&#160;flags.hpp']]],
  ['define_5fdouble',['DEFINE_double',['../flags_8hpp.html#a29f9621cd9361deec9512f8d8b53e6ba',1,'DEFINE_double(camera_fps, 30.0,&quot;Frame rate for the webcam (also used when saving video). Set this value to the minimum&quot;&quot; value between the OpenPose displayed speed and the webcam real frame rate.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#adf35e9261afec1673a42de6197f07f42',1,'DEFINE_double(scale_gap, 0.3,&quot;Scale gap between scales. No effect unless scale_number &gt; 1. Initial scale is always 1.&quot;&quot; If you want to change the initial scale, you actually want to multiply the&quot;&quot; `net_resolution` by your desired initial scale.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#a94efdbeb7b9adb554d34399279312b8f',1,'DEFINE_double(hand_scale_range, 0.4,&quot;Analogous purpose than `scale_gap` but applied to the hand keypoint detector. Total range&quot;&quot; between smallest and biggest scale. The scales will be centered in ratio 1. E.g. if&quot;&quot; scaleRange = 0.4 and scalesNumber = 2, then there will be 2 scales, 0.8 and 1.2.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#afd21fc201e4b269bf0b07b8fce886173',1,'DEFINE_double(render_threshold, 0.05,&quot;Only estimated keypoints whose score confidences are higher than this threshold will be&quot;&quot; rendered. Generally, a high threshold (&gt; 0.5) will only render very clear body parts;&quot;&quot; while small thresholds (~0.1) will also output guessed and occluded keypoints, but also&quot;&quot; more false positives (i.e. wrong detections).&quot;):&#160;flags.hpp'],['../flags_8hpp.html#ad971ae1068651177e7a78ae68c022792',1,'DEFINE_double(alpha_pose, 0.6,&quot;Blending factor (range 0-1) for the body part rendering. 1 will show it completely, 0 will&quot;&quot; hide it. Only valid for GPU rendering.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#a62bfc56794bb8ceaedd0eb7bc32a0f22',1,'DEFINE_double(alpha_heatmap, 0.7,&quot;Blending factor (range 0-1) between heatmap and original frame. 1 will only show the&quot;&quot; heatmap, 0 will only show the frame. Only valid for GPU rendering.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#a53eb4c15af968876f31ca0be54d251b3',1,'DEFINE_double(face_render_threshold, 0.4,&quot;Analogous to `render_threshold`, but applied to the face keypoints.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#af654373ad667b1683f30e350331ea709',1,'DEFINE_double(face_alpha_pose, 0.6,&quot;Analogous to `alpha_pose` but applied to face.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#a71043931875d1f5ec677fd69ae96c632',1,'DEFINE_double(face_alpha_heatmap, 0.7,&quot;Analogous to `alpha_heatmap` but applied to face.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#a6b12d681ace972ae8eede484505c50af',1,'DEFINE_double(hand_render_threshold, 0.2,&quot;Analogous to `render_threshold`, but applied to the hand keypoints.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#a890b2b8df8a57fe4e9baa465c6584ccf',1,'DEFINE_double(hand_alpha_pose, 0.6,&quot;Analogous to `alpha_pose` but applied to hand.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#ac17a7af1030d7f5bd69672fec961c083',1,'DEFINE_double(hand_alpha_heatmap, 0.7,&quot;Analogous to `alpha_heatmap` but applied to hand.&quot;):&#160;flags.hpp']]],
  ['define_5fint32',['DEFINE_int32',['../flags_8hpp.html#a73ee51843ead02ee6358fe39dcbeffde',1,'DEFINE_int32(logging_level, 3,&quot;The logging level. Integer in the range [0, 255]. 0 will output any log() message, while&quot;&quot; 255 will not output any. Current OpenPose library messages are in the range 0-4: 1 for&quot;&quot; low priority messages and 4 for important ones.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#a8e9de971b409cfe7fdded7f0d47c502d',1,'DEFINE_int32(profile_speed, 1000,&quot;If PROFILER_ENABLED was set in CMake or Makefile.config files, OpenPose will show some&quot;&quot; runtime statistics at this frame number.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#a10efaeb1ea3a8478388cc7d0bfd4e59e',1,'DEFINE_int32(camera,-1,&quot;The camera index for cv::VideoCapture. Integer in the range [0, 9]. Select a negative&quot;&quot; number (by default), to auto-detect and open the first available camera.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#ab41c02abe3634f0db65123ecda964a31',1,'DEFINE_int32(flir_camera_index,-1,&quot;Select -1 (default) to run on all detected flir cameras at once. Otherwise, select the flir&quot;&quot; camera index to run, where 0 corresponds to the detected flir camera with the lowest&quot;&quot; serial number, and `n` to the `n`-th lowest serial number camera.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#a6c9c8a5843dd8b93e009bf29dc31cde2',1,'DEFINE_int32(frame_rotate, 0,&quot;Rotate each frame, 4 possible values: 0, 90, 180, 270.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#a284252d3d255ad5e5c35815d720fd67a',1,'DEFINE_int32(num_gpu,-1,&quot;The number of GPU devices to use. If negative, it will use all the available GPUs in your&quot;&quot; machine.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#a8511765700f652000f2c1c2b1a5df9f9',1,'DEFINE_int32(num_gpu_start, 0,&quot;GPU device start number.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#a18fc454ffeef53c7c73d69c67d1a73fc',1,'DEFINE_int32(keypoint_scale, 0,&quot;Scaling of the (x,y) coordinates of the final pose data array, i.e. the scale of the (x,y)&quot;&quot; coordinates that will be saved with the `write_json` &amp; `write_keypoint` flags.&quot;&quot; Select `0` to scale it to the original source resolution; `1`to scale it to the net output&quot;&quot; size (set with `net_resolution`); `2` to scale it to the final output size (set with&quot;&quot; `resolution`); `3` to scale it in the range [0,1], where (0,0) would be the top-left&quot;&quot; corner of the image, and (1,1) the bottom-right one; and 4 for range [-1,1], where&quot;&quot; (-1,-1) would be the top-left corner of the image, and (1,1) the bottom-right one. Non&quot;&quot; related with `scale_number` and `scale_gap`.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#aa5a1826a500d7131fefb480ccd1713fb',1,'DEFINE_int32(number_people_max,-1,&quot;This parameter will limit the maximum number of people detected, by keeping the people with&quot;&quot; top scores. The score is based in person area over the image, body part score, as well as&quot;&quot; joint score (between each pair of connected body parts). Useful if you know the exact&quot;&quot; number of people in the scene, so it can remove false positives (if all the people have&quot;&quot; been detected. However, it might also include false negatives by removing very small or&quot;&quot; highly occluded people. -1 will keep them all.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#a1edea5f45026b353b6e6cc3b196767a0',1,'DEFINE_int32(scale_number, 1,&quot;Number of scales to average.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#aa80e5f9914dd35c852941282aa229b21',1,'DEFINE_int32(heatmaps_scale, 2,&quot;Set 0 to scale op::Datum::poseHeatMaps in the range [-1,1], 1 for [0,1]; 2 for integer&quot;&quot; rounded [0,255]; and 3 for no scaling.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#a311e487137e17445e6939abb7cc0cf8f',1,'DEFINE_int32(hand_scale_number, 1,&quot;Analogous to `scale_number` but applied to the hand keypoint detector. Our best results&quot;&quot; were found with `hand_scale_number` = 6 and `hand_scale_range` = 0.4.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#aa797dd033c6f3c4d2654e7000939d270',1,'DEFINE_int32(3d_min_views,-1,&quot;Minimum number of views required to reconstruct each keypoint. By default (-1), it will&quot;&quot; require all the cameras to see the keypoint in order to reconstruct it.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#a20c481950df0272f0b7b0cde67d8e72a',1,'DEFINE_int32(3d_views, 1,&quot;Complementary option to `--image_dir` or `--video`. OpenPose will read as many images per&quot;&quot; iteration, allowing tasks such as stereo camera processing (`--3d`). Note that&quot;&quot; `--camera_parameters_folder` must be set. OpenPose must find as many `xml` files in the&quot;&quot; parameter folder as this number indicates.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#afdfef14901f7b5e324d6983845f5ab50',1,'DEFINE_int32(tracking,-1,&quot;Experimental, not available yet. Whether to enable people tracking across frames. The&quot;&quot; value indicates the number of frames where tracking is run between each OpenPose keypoint&quot;&quot; detection. Select -1 (default) to disable it or 0 to run simultaneously OpenPose keypoint&quot;&quot; detector and tracking for potentially higher accurary than only OpenPose.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#a072bd893f4003b48bc7c99735eeeed39',1,'DEFINE_int32(ik_threads, 0,&quot;Experimental, not available yet. Whether to enable inverse kinematics (IK) from 3-D&quot;&quot; keypoints to obtain 3-D joint angles. By default (0 threads), it is disabled. Increasing&quot;&quot; the number of threads will increase the speed but also the global system latency.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#a4cead735de5b43cfcae5c1139df3be1a',1,'DEFINE_int32(part_to_show, 0,&quot;Prediction channel to visualize (default: 0). 0 for all the body parts, 1-18 for each body&quot;&quot; part heat map, 19 for the background heat map, 20 for all the body part heat maps&quot;&quot; together, 21 for all the PAFs, 22-40 for each body part pair PAF.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#ab2af299b6380dcd6dc06a95cceb056d4',1,'DEFINE_int32(render_pose,-1,&quot;Set to 0 for no rendering, 1 for CPU rendering (slightly faster), and 2 for GPU rendering&quot;&quot; (slower but greater functionality, e.g. `alpha_X` flags). If -1, it will pick CPU if&quot;&quot; CPU_ONLY is enabled, or GPU if CUDA is enabled. If rendering is enabled, it will render&quot;&quot; both `outputData` and `cvOutputData` with the original image and desired body part to be&quot;&quot; shown (i.e. keypoints, heat maps or PAFs).&quot;):&#160;flags.hpp'],['../flags_8hpp.html#ad0269da28dc2033e23b8ea84b7e793a2',1,'DEFINE_int32(face_render,-1,&quot;Analogous to `render_pose` but applied to the face. Extra option: -1 to use the same&quot;&quot; configuration that `render_pose` is using.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#ada5b7fef5063818fd668359e9e0b0504',1,'DEFINE_int32(hand_render,-1,&quot;Analogous to `render_pose` but applied to the hand. Extra option: -1 to use the same&quot;&quot; configuration that `render_pose` is using.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#a9a34e10f75069cf3283e535a77006775',1,'DEFINE_int32(display,-1,&quot;Display mode: -1 for automatic selection; 0 for no display (useful if there is no X server&quot;&quot; and/or to slightly speed up the processing if visual output is not required); 2 for 2-D&quot;&quot; display; 3 for 3-D display (if `--3d` enabled); and 1 for both 2-D and 3-D display.&quot;):&#160;flags.hpp']]],
  ['define_5fstring',['DEFINE_string',['../flags_8hpp.html#a9e7b1394aea185360a1fe19cf4e20a89',1,'DEFINE_string(camera_resolution,&quot;-1x-1&quot;,&quot;Set the camera resolution (either `--camera` or `--flir_camera`). `-1x-1` will use the&quot;&quot; default 1280x720 for `--camera`, or the maximum flir camera resolution available for&quot;&quot; `--flir_camera`&quot;):&#160;flags.hpp'],['../flags_8hpp.html#aab02d4078b5f7999a582d9c5f4248676',1,'DEFINE_string(video,&quot;&quot;,&quot;Use a video file instead of the camera. Use `examples/media/video.avi` for our default&quot;&quot; example video.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#a7773e867133822f5601899975dc06adb',1,'DEFINE_string(image_dir,&quot;&quot;,&quot;Process a directory of images. Use `examples/media/` for our default example folder with 20&quot;&quot; images. Read all standard formats (jpg, png, bmp, etc.).&quot;):&#160;flags.hpp'],['../flags_8hpp.html#a5db17b8bc6df4fe40b556af7157dcbf7',1,'DEFINE_string(ip_camera,&quot;&quot;,&quot;String with the IP camera URL. It supports protocols like RTSP and HTTP.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#aff61246512375ff5941dc4110e127ca3',1,'DEFINE_string(camera_parameter_folder,&quot;models/cameraParameters/flir/&quot;,&quot;String with the folder where the camera parameters are located.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#a9ab689ebe20a261b20587af79123e79a',1,'DEFINE_string(model_folder,&quot;models/&quot;,&quot;Folder path (absolute or relative) where the models (pose, face, ...) are located.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#a85be61a31eaa438a7e9c7d2baf51da47',1,'DEFINE_string(output_resolution,&quot;-1x-1&quot;,&quot;The image resolution (display and output). Use \&quot;-1x-1\&quot; to force the program to use the&quot;&quot; input image resolution.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#acfd124be44003a59f2591c7584fd3c75',1,'DEFINE_string(model_pose,&quot;BODY_25&quot;,&quot;Model to be used. E.g. `COCO` (18 keypoints), `MPI` (15 keypoints, ~10% faster), &quot;&quot;`MPI_4_layers` (15 keypoints, even faster but less accurate).&quot;):&#160;flags.hpp'],['../flags_8hpp.html#a830bcfa6645bf39a18f59d3b72f75edf',1,'DEFINE_string(net_resolution,&quot;-1x368&quot;,&quot;Multiples of 16. If it is increased, the accuracy potentially increases. If it is&quot;&quot; decreased, the speed increases. For maximum speed-accuracy balance, it should keep the&quot;&quot; closest aspect ratio possible to the images or videos to be processed. Using `-1` in&quot;&quot; any of the dimensions, OP will choose the optimal aspect ratio depending on the user&apos;s&quot;&quot; input value. E.g. the default `-1x368` is equivalent to `656x368` in 16:9 resolutions,&quot;&quot; e.g. full HD (1980x1080) and HD (1280x720) resolutions.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#af5ee5f61f0d36a03bb8647408f5e236b',1,'DEFINE_string(face_net_resolution,&quot;368x368&quot;,&quot;Multiples of 16 and squared. Analogous to `net_resolution` but applied to the face keypoint&quot;&quot; detector. 320x320 usually works fine while giving a substantial speed up when multiple&quot;&quot; faces on the image.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#afaf97bbf6a49576782d25147bc865bed',1,'DEFINE_string(hand_net_resolution,&quot;368x368&quot;,&quot;Multiples of 16 and squared. Analogous to `net_resolution` but applied to the hand keypoint&quot;&quot; detector.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#a7a3597e9216885470199ca1578eb7f69',1,'DEFINE_string(write_images,&quot;&quot;,&quot;Directory to write rendered frames in `write_images_format` image format.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#ab077893503ebb5fba8cb300bd5f93d62',1,'DEFINE_string(write_images_format,&quot;png&quot;,&quot;File extension and format for `write_images`, e.g. png, jpg or bmp. Check the OpenCV&quot;&quot; function cv::imwrite for all compatible extensions.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#a3051d21eb51cc39eed5f781d8eaed960',1,'DEFINE_string(write_video,&quot;&quot;,&quot;Full file path to write rendered frames in motion JPEG video format. It might fail if the&quot;&quot; final path does not finish in `.avi`. It internally uses cv::VideoWriter. Flag&quot;&quot; `camera_fps` controls FPS.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#a9aa48b2ab293842bc42b96df9e97c9b8',1,'DEFINE_string(write_json,&quot;&quot;,&quot;Directory to write OpenPose output in JSON format. It includes body, hand, and face pose&quot;&quot; keypoints (2-D and 3-D), as well as pose candidates (if `--part_candidates` enabled).&quot;):&#160;flags.hpp'],['../flags_8hpp.html#a26d1c7340fc87d4593dda754d54145a2',1,'DEFINE_string(write_coco_json,&quot;&quot;,&quot;Full file path to write people pose data with JSON COCO validation format.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#ac6c2099e630e05f867ee10b43f35dc65',1,'DEFINE_string(write_coco_foot_json,&quot;&quot;,&quot;Full file path to write people foot pose data with JSON COCO validation format.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#aa3fe7c4c07492e6553a6c2d25ebd76b4',1,'DEFINE_string(write_heatmaps,&quot;&quot;,&quot;Directory to write body pose heatmaps in PNG format. At least 1 `add_heatmaps_X` flag&quot;&quot; must be enabled.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#a242473077549869f06534e8a9ea1ddd6',1,'DEFINE_string(write_heatmaps_format,&quot;png&quot;,&quot;File extension and format for `write_heatmaps`, analogous to `write_images_format`.&quot;&quot; For lossless compression, recommended `png` for integer `heatmaps_scale` and `float` for&quot;&quot; floating values.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#ad8c5173beb83c0f9996362b3a3fba820',1,'DEFINE_string(write_keypoint,&quot;&quot;,&quot;(Deprecated, use `write_json`) Directory to write the people pose keypoint data. Set format&quot;&quot; with `write_keypoint_format`.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#a5aaba99bdb163516d0297d2e09dd0c7d',1,'DEFINE_string(write_keypoint_format,&quot;yml&quot;,&quot;(Deprecated, use `write_json`) File extension and format for `write_keypoint`: json, xml,&quot;&quot; yaml &amp; yml. Json not available for OpenCV &lt; 3.0, use `write_json` instead.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#a6c5341914694863528d3d93b23b45f01',1,'DEFINE_string(write_video_adam,&quot;&quot;,&quot;Experimental, not available yet. E.g.: `~/Desktop/adamResult.avi`. Flag `camera_fps`&quot;&quot; controls FPS.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#ad0c09dd7ede747d69d36dc86c7ffa11c',1,'DEFINE_string(write_bvh,&quot;&quot;,&quot;Experimental, not available yet. E.g.: `~/Desktop/mocapResult.bvh`.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#a63936bd2bc53a453ba74066289ab9d29',1,'DEFINE_string(udp_host,&quot;&quot;,&quot;Experimental, not available yet. IP for UDP communication. E.g., `192.168.0.1`.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#aa7b1c758c6d6e35c3227994a9ced0236',1,'DEFINE_string(udp_port,&quot;8051&quot;,&quot;Experimental, not available yet. Port number for UDP communication.&quot;):&#160;flags.hpp']]],
  ['define_5fuint64',['DEFINE_uint64',['../flags_8hpp.html#a1433eaf1c5eb42e406e76bc6f8e517c3',1,'DEFINE_uint64(frame_first, 0,&quot;Start on desired frame number. Indexes are 0-based, i.e. the first frame has index 0.&quot;):&#160;flags.hpp'],['../flags_8hpp.html#ac8fef8bb0234286e74b75214a750d674',1,'DEFINE_uint64(frame_last,-1,&quot;Finish on desired frame number. Select -1 to disable. Indexes are 0-based, e.g. if set to&quot;&quot; 10, it will process 11 frames (0-10).&quot;):&#160;flags.hpp']]],
  ['delete_5fcopy',['DELETE_COPY',['../classop_1_1_face_cpu_renderer.html#a233f2a83930d07e4d420b43c8a660f32',1,'op::FaceCpuRenderer::DELETE_COPY()'],['../classop_1_1_hand_cpu_renderer.html#a66a7d318b240c73687320bf092363409',1,'op::HandCpuRenderer::DELETE_COPY()'],['../classop_1_1_sub_thread_no_queue.html#a43504502c36461305d656fb87b914749',1,'op::SubThreadNoQueue::DELETE_COPY()']]],
  ['deleter',['Deleter',['../classcl_1_1detail_1_1_deleter.html#a899859732bb1c5f296f3e4f05ca6a39d',1,'cl::detail::Deleter']]],
  ['destroy',['destroy',['../classcl_1_1_s_v_m_allocator.html#a86498cce5cce2d8ac1c509862eb28977',1,'cl::SVMAllocator']]],
  ['detectfaces',['detectFaces',['../classop_1_1_face_detector.html#ada0720f8c51fc6226c5139eb2ccaae69',1,'op::FaceDetector::detectFaces()'],['../classop_1_1_face_detector_open_c_v.html#a3cbd067534f06315ab8a2332f7ba246a',1,'op::FaceDetectorOpenCV::detectFaces()']]],
  ['detecthands',['detectHands',['../classop_1_1_hand_detector.html#aaa1c303a5dede04b68acc1a9cedc2568',1,'op::HandDetector::detectHands()'],['../classop_1_1_hand_detector_from_txt.html#a1e6ba23fa1486e92a3bdca36b2e86d22',1,'op::HandDetectorFromTxt::detectHands()']]],
  ['device',['Device',['../classcl_1_1_device.html#a6131ff3eb77c31dfba11091a3c0f4235',1,'cl::Device::Device()'],['../classcl_1_1_device.html#ad28b573c8a28028a06ded4e1dc7fa725',1,'cl::Device::Device(const cl_device_id &amp;device, bool retainObject=false)'],['../classcl_1_1_device.html#a8445328fa0af11c93f20615f820b93fc',1,'cl::Device::Device(const Device &amp;dev)'],['../classcl_1_1_device.html#a9a8f38bb1636628bdb31d3a47c8cee36',1,'cl::Device::Device(Device &amp;&amp;dev) CL_HPP_NOEXCEPT_']]],
  ['devicecommandqueue',['DeviceCommandQueue',['../classcl_1_1_device_command_queue.html#ab58e477e1a9bf099e1faf77565e80856',1,'cl::DeviceCommandQueue::DeviceCommandQueue()'],['../classcl_1_1_device_command_queue.html#a796862188d423d2cfd1e90c4fafc5d5f',1,'cl::DeviceCommandQueue::DeviceCommandQueue(DeviceQueueProperties properties, cl_int *err=NULL)'],['../classcl_1_1_device_command_queue.html#a098b1a3d3485828fde04fc7f10f8e1c4',1,'cl::DeviceCommandQueue::DeviceCommandQueue(const Context &amp;context, const Device &amp;device, DeviceQueueProperties properties=DeviceQueueProperties::None, cl_int *err=NULL)'],['../classcl_1_1_device_command_queue.html#a16613c9133f453851d72c6793d522d81',1,'cl::DeviceCommandQueue::DeviceCommandQueue(const Context &amp;context, const Device &amp;device, cl_uint queueSize, DeviceQueueProperties properties=DeviceQueueProperties::None, cl_int *err=NULL)'],['../classcl_1_1_device_command_queue.html#acaf1dee2f55faeac05b2c1c66daf51c2',1,'cl::DeviceCommandQueue::DeviceCommandQueue(const cl_command_queue &amp;commandQueue, bool retainObject=false)'],['../classcl_1_1_device_command_queue.html#a897785d635ca36d68444435617ad6fc1',1,'cl::DeviceCommandQueue::DeviceCommandQueue(const DeviceCommandQueue &amp;queue)'],['../classcl_1_1_device_command_queue.html#ac1cc85eaacd3a27a57b34471b41b073c',1,'cl::DeviceCommandQueue::DeviceCommandQueue(DeviceCommandQueue &amp;&amp;queue) CL_HPP_NOEXCEPT_']]],
  ['dimensions',['dimensions',['../classcl_1_1_n_d_range.html#a1360e9bdd3604fd06069d1fd981eed6b',1,'cl::NDRange']]],
  ['disablemultithreading',['disableMultiThreading',['../classop_1_1_wrapper_t.html#a5738f1e0569e98bd260598f3e0510ccb',1,'op::WrapperT']]],
  ['displayframe',['displayFrame',['../classop_1_1_frame_displayer.html#ada237c384d55d6e141dce886e6fe97e3',1,'op::FrameDisplayer::displayFrame(const cv::Mat &amp;frame, const int waitKeyValue=-1)'],['../classop_1_1_frame_displayer.html#ac047ba552b5c1a9b9a23b973484ff931',1,'op::FrameDisplayer::displayFrame(const std::vector&lt; cv::Mat &gt; &amp;frames, const int waitKeyValue=-1)']]],
  ['dlog',['dLog',['../namespaceop.html#a4eb991aa18818196d35c66455a437a32',1,'op']]],
  ['drawgridcorners',['drawGridCorners',['../namespaceop.html#a1a0199d6781778e6f50213c816189f26',1,'op']]]
];
